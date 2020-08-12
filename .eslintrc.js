module.exports = {
  extends: ['plugin:react/recommended', 'airbnb'],
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-one-expression-per-line': 'off',
    'linebreak-style': 'off',
  },
};
