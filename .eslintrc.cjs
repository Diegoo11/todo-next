module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true,
  },
  extends: ['airbnb', 'next'],
  rules: {
    'linebreak-style': 0,
    'import/prefer-default-export': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    camelcase: 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};
