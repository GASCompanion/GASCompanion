import path from 'path';
import { handlePullRequestLink } from "../gh/fetch-pr.js";

const output = path.resolve('src/changelog/index.md');

const test = async () => {
	await handlePullRequestLink(output, `6.2.0`, { api: `repos/GASCompanion/GASCompanion-Plugin/pulls/94` });
};

await test();
