module.exports = {
	overrides: [
		{
			files: ['*.bundle.js'],
			rules: {
				'prettier/prettier': 'off',
				'no-unused-vars': 'off',
				'no-undef': 'off',
				'no-console': 'off',
			},
		},
	],
};
