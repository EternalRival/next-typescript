import path from 'node:path';

const eslintCmd = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`;

const formatCmd = 'npm run ci:format';

const stylelintCmd = 'npm run ci:stylelint';

const config = {
  '*.{ts,js,cjs,mjs,css}': [formatCmd],
  '*.{ts,tsx,js,cjs,mjs}': [eslintCmd],
  '*.css': [stylelintCmd],
};

export default config;
