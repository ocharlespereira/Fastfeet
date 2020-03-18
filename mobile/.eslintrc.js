module.exports = {
  env: {
    es6: true,
    jest: true,
    browser: true
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'prettier',
    'prettier/react'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
    __DEV__: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'react-hooks',
    'prettier',
    'eslint-plugin-import-helpers',
    'import-helpers'
  ],
  rules: {
    // 'prettier/prettier': 'error',
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],

    'react/static-property-placement': 'off',
    'react/sort-comp': 'off',
    'import/prefer-default-export': 'off',
    'react-hooks/rules-of-hooks': 'error',

    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'react/jsx-one-expression-per-line': 'off',
    'global-require': 'off',
    'react-native/no-raw-text': 'off',
    'no-param-reassign': 'off',
    'no-underscore-dangle': 'off',
    camelcase: 'off',
    'no-console': ['error', { allow: ['tron'] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          '/^react/',
          'module',
          '/^~/',
          '/^@shared/',
          ['parent', 'sibling', 'index'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
  },
  settings: {
    'import/resolver': {
      'babel-plugin-root-import': {
        rootPathSuffix: 'src'
      }
    }
  }
};
