import arg from 'arg';
import { promises as fs } from 'fs';
import path from 'path';
import got from 'gh-got';

import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkStringify from 'remark-stringify';
import remarkGfm from 'remark-gfm';
import remarkGithub from 'remark-github';
import { handlePullRequestLink } from './gh/fetch-pr.js';
import { remarkRemoveMentions, remarkTransformReleaseNote } from './remark/transformers.js';
import { user, repo, token } from './config.js';

const args = arg({
	// Types
	'--help': Boolean,
	'--version': Boolean,
	'--output': (value, argName, previousValue) => {
		return path.resolve(value);
	},

	// Aliases
	'-v': '--version',
	'--out': '--output',
	'-o': '--output',
});

console.log('arg', args);

const output = args['--output'] || path.resolve('src/changelog/index.md');

console.log(`Using token "${token}" to fetch release note`);
console.log(`Using output "${output}" to generate release note`);
console.log(`---`);

// https://api.github.com/repos/GASCompanion/GASCompanion-Plugin/releases

const getReleaseNoteContent = async (tag) => {
	const { body } = await got(`repos/${user}/${repo}/releases/tags/${tag}`);
	console.log(body);

	let pullRequestLinks = [];

	// Parse and transform markdown of release note

	const content = await unified()
		.use(remarkParse)
		.use(remarkRemoveMentions())
		.use(remarkGfm)
		.use(remarkGithub, {
			repository: `${user}/${repo}`
		})
		.use(remarkTransformReleaseNote(pullRequestLinks))
		.use(remarkStringify)

		// .use(remarkRehype)
		// .use(rehypeSanitize)
		// .use(rehypeStringify)
		.process(body.body)

	return {
		content: String(content),
		pullRequestLinks
	};
};

const generateForTag = async (tag, tags = []) => {
	const url = `repos/${user}/${repo}/releases/tags/${tag}`;

	console.log(`Generating release notes PRs for ${tag}`);
	console.log(`Fetching url: ${url}`);
	const { body } = await got(url);

	// Parse and transform markdown of release note

	const { content, pullRequestLinks } = await getReleaseNoteContent(tag);

	// Fetch and build each Pull Request page
	for (const link of pullRequestLinks) {
		handlePullRequestLink(output, tag, link);
	}

	const date = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date(body.created_at));
	const releaseNoteContent = `## [${body.name}](https://github.com/${user}/${repo}/releases/tag/${tag}) - ${date}

${content}
`;

	return releaseNoteContent;
}

const fetchAllReleases = async () => {
	const { body } = await got(`repos/${user}/${repo}/releases`);
	return body;
};

const fetchAllTags = async () => {
	const releases = await fetchAllReleases();
	return releases.map(release => release.tag_name);
};


const main = async () => {

	let tags = await fetchAllTags();

	let contents = `---
title: Changelog
description: GAS Companion Changelog
eleventyNavigation:
parent: More
key: Changelog
layout: layouts/markdown
---

<div class="border rounded-1 mb-4 p-3 color-border-accent-emphasis color-bg-accent f5">

Note that from the 6.0.0 release of this changelog, you can now click on Pull Request links (identified by a number prefixed by a \`#\`) to get further information about the related changes (new features / bugfix, etc.).

With each PR, I tend to put a little bit of documentation and some screenshots about the added features, what it does etc.

They can often serve as the basics of documentation before the website is updated to reflect the changes.

</div>

`;

	for (const tag of tags) {
		const content = await generateForTag(tag, tags);
		contents += `
${content}
  `;
	}

	const now = new Intl.DateTimeFormat('en', { day: 'numeric', month: 'short', year: 'numeric' }).format(new Date());
	contents += `
---

Updated ${now}
`;

	await fs.writeFile(output, contents)
};

main();
