import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: [
      'plugin:@typescript-eslint/strict-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
      'next/core-web-vitals',
      'next/typescript',
    ],
    parserOptions: {
      projectService: true,
      tsconfigRootDir: __dirname,
    },
    plugins: ['@stylistic'],
    rules: {
      '@typescript-eslint/member-ordering': 'error',
      '@typescript-eslint/explicit-member-accessibility': [
        'error',
        { accessibility: 'explicit', overrides: { constructors: 'off' } },
      ],
      '@typescript-eslint/no-unnecessary-condition': ['error', { allowConstantLoopConditions: true }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@stylistic/lines-between-class-members': ['error', 'always'],
      '@stylistic/padding-line-between-statements': [
        'error',
        {
          blankLine: 'always',
          prev: ['const', 'let', 'case', 'default', 'block', 'block-like', 'multiline-block-like', 'interface', 'type'],
          next: '*',
        },
        {
          blankLine: 'any',
          prev: ['const', 'let'],
          next: ['const', 'let'],
        },
        {
          blankLine: 'always',
          prev: '*',
          next: ['switch', 'while', 'try', 'return', 'if', 'interface', 'type', 'function', 'export'],
        },
      ],
      '@stylistic/jsx-pascal-case': 'error',
      '@stylistic/jsx-sort-props': [
        'error',
        {
          callbacksLast: true,
          ignoreCase: true,
          noSortAlphabetically: true,
          multiline: 'last',
          reservedFirst: false,
        },
      ],
    },
    overrides: [
      {
        files: ['**/*.{js,cjs,mjs}'],
        extends: ['plugin:@typescript-eslint/disable-type-checked'],
      },
    ],
  }),
];

export default eslintConfig;
