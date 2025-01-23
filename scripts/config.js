
export const user = `GASCompanion`;
export const repo = `GASCompanion-Plugin`;
export const assetsPattern = `https://github.com/${user}/${repo}/assets/`;

export const token = process.env.GITHUB_TOKEN;

// List of heading text we know and always want to have at a fixed 5 lvl heading
export const fixedHeadings = [
	`Breaking Changes 🛠`,
	`New Features 🎉`,
	`Bug Fixes`,
	`Other Changes`
];



if (!token) {
	console.error(`No token could be found in process.env`);
	process.exit(1);
}
