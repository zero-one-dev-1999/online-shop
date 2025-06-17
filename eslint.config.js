import js from '@eslint/js'
import react from '@eslint-react/eslint-plugin'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import importPlugin from 'eslint-plugin-import'

export default [
	{ ignores: ['dist'] },
	prettierConfig,
	js.configs.recommended,
	{
		files: ['**/*.{js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
				sourceType: 'module',
			},
		},
		plugins: {
			react,
			prettier,
			// import: importPlugin,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},

		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prettier/prettier': [0, {}, { usePrettierrc: true }],
			'no-unused-vars': 'warn',
			'no-restricted-imports': [
				'error',
				{
					patterns: ['@mui/*/*/*'],
				},
			],
			'react-hooks/exhaustive-deps': 'off',
			'react/jsx-uses-react': 'off',
			'react/jsx-uses-vars': 'warn',
		},
	},
]
