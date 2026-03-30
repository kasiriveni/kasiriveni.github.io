module.exports = {
	testEnvironment: 'jsdom',
	moduleNameMapper: {
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.[tj]sx?$': 'babel-jest',
	},
	setupFilesAfterEnv: ['./node_modules/@testing-library/jest-dom/dist/index.js'],
	globals: {
		test: true,
		describe: true,
		expect: true,
	},
};

console.log('Jest Config Loaded:', JSON.stringify(module.exports, null, 2));
