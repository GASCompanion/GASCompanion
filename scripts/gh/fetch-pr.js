import goat from 'got';
import got from 'gh-got';
import mkdirp from 'mkdirp';
import path from 'path';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import { createWriteStream } from 'fs';
import { format } from 'date-fns';
import { promises as fs } from 'fs';
import { remarkRewritePullRequestImageAssetsUrl, remarkTransformPullRequest } from '../remark/transformers.js';
import { unified } from 'unified';

import { token, user, repo, assetsPattern } from '../config.js'

const fetchImage = (image, dirname) => {
	return new Promise((resolve, reject) => {
		const filename = image
			.replace(assetsPattern, '')
			.replace(`https://github.com/user-attachments/assets/`, '')
			.replace('/', '-');

		const downloadStream = goat.stream(image, {
			headers: {
				'authorization': `token ${token}`
			}
		});

		downloadStream.on('error', reject);

		const destination = path.join(dirname, filename + '.png');
		const fileWriterStream = createWriteStream(destination)
			.on('error', reject)
			.on('finish', resolve);

		console.log(`Download image ${image} to ${destination}`);
		downloadStream.pipe(fileWriterStream);
	});
};

export const fetchPullRequest = async ({ api }) => {
	return await got(api);
};

export const handlePullRequestLink = async (output, tag, link) => {
	const result = await fetchPullRequest(link);
	const { number } = result.body;
	const dirname = path.join(path.dirname(output), `pull/${number}`);
	await mkdirp(dirname);
	console.log(`Created directory ${dirname}`);

	const content = await getPullRequestContent(output, tag, result);

	const filename = path.join(dirname, 'index.md');
	await fs.writeFile(filename, content);

	console.log(`Created file at ${filename}`);
};

export const getPullRequestContent = async (output, tag, result) => {
	const { number, created_at, html_url, body } = result.body;
	let { title } = result.body;

	// escape title for " characters before wrapping it in "" in frontmatter
	title = title.replace(/"/g, '\\"');

	let imagesToDownload = [];

	// transform markdown content
	const content = await unified()
		.use(remarkParse)
		.use(remarkGfm)
		.use(remarkGithub, {
			repository: `${user}/${repo}`
		})
		.use(remarkTransformPullRequest)
		.use(remarkRewritePullRequestImageAssetsUrl(imagesToDownload))
		.use(remarkStringify)
		.process(body || '');

	const promises = imagesToDownload.map(image => fetchImage(image, path.join(path.dirname(output), `pull/${number}`)));
	await Promise.all(promises).catch(console.error);

	return `---
title: "Pull Request #${number}"
description: "${title}"
eleventyNavigation:
  parent: Changelog
  key: Changelog_PR_${number}
  title: "${tag} - PR #${number}"
  excerpt: "${title}"
layout: layouts/markdown
---

*[on ${format(new Date(created_at), 'PPP')}](${html_url})*

## ${title}

${content}
`;
};
