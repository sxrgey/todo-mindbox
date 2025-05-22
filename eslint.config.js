import js from '@eslint/js';
import typescript from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tsParser from '@typescript-eslint/parser';

export default [
  js.configs.recommended,
  ...typescript.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
      },
    },
    plugins: {
      'simple-import-sort': simpleImportSort,
    },
    rules: {
      'simple-import-sort/exports': 'error',
      'simple-import-sort/imports': 'error',
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': ['error'],
      '@typescript-eslint/no-unused-vars': ['error'],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      complexity: ['warn', 5],
    },
  },
  {
    rules: prettier.rules,
  },
];
