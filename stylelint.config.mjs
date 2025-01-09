/** @type {import('stylelint').Config} */
const config = {
  extends: ['@eternalrival/stylelint-config'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
  },
};

export default config;
