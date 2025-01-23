import { visit } from 'unist-util-visit'

import { user, repo, assetsPattern, fixedHeadings } from '../config.js'

export const remarkTransformPullRequest = () => {
	return (tree) => {
		visit(tree, (node, index, parent) => {
			// Links
			// Gather the list of Pull Requests links, and replace with local URLs to generated .md
			if (node.type === 'link') {
				const reg = new RegExp(`https://github.com/${user}/${repo}/(pull|issues)/(\\d+)$`);
				const match = node.url.match(reg);

				if (match) {
					// node.url = `../../pull/${match[2]}`;
					node.url = `/changelog/pull/${match[2]}`;
					if (node.children && node.children[0]) {
						node.children[0].value = `#${match[2]}`;
					}

					return;
				}
			}
		});
	};
};

export const remarkRewritePullRequestImageAssetsUrl = (imagesToDownload) => {
	return () => {
		return (tree) => {
			visit(tree, (node, index, parent) => {
				if (node.type === 'image') {
					const { url } = node;

					if (url.startsWith(assetsPattern)) {
						imagesToDownload.push(url);
						node.url = `./${url.replace(assetsPattern, '').replace('/', '-')}.png`;
					}

					return;
				}
			});
		};
	};
};

// List of Pull Request found in the release notes, to fetch and generate just after markdown parsing
// List is filled during markdown parsing
export const remarkRemoveMentions = () => {
	return () => {
		return (tree) => {
			visit(tree, (node) => {
				// Text
				if (node.type === 'text') {
					// Remove any " by @mklabs" tokens
					node.value = node.value.replace(/ by @mklabs/g, '');
					return;
				}
			});
		};
	};
};

export const remarkTransformReleaseNote = (pullRequestLinks) => {
	return () => {
		return (tree) => {
			visit(tree, (node, index, parent) => {
				// Headings
				if (node.type === 'heading') {
					const { children } = node;

					// Remove first "What's Changed" heading
					if (children && children.find(child => child.value === `What's Changed`)) {
						parent.children.splice(index, 1);
						return index;
					}

					// Increase any known heading to a fixed 5 level heading depth
					const isFixedHeading = !!children.find(child => fixedHeadings.includes(child.value));
					if (isFixedHeading) {
						node.depth = 5;
						return;
					}

					return;
				}

				// Links
				// Gather the list of Pull Requests links, and replace with local URLs to generated .md
				if (node.type === 'link') {
					const reg = new RegExp(`https://github.com/${user}/${repo}/(pull|issues)/(\\d+)$`);
					const match = node.url.match(reg);

					if (match) {
						pullRequestLinks.push({
							url: match[0],
							api: `repos/${user}/${repo}/pulls/${match[2]}`
						});

						node.url = `./pull/${match[2]}`;
						if (node.children && node.children[0]) {
							node.children[0].value = `#${match[2]}`;
						}

						return;
					}
				}
			});
		};
	};
};
