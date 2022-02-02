module.exports = {
  // Parser to be used by eslint
  parser: '@typescript-eslint/parser',
  parserOptions: {
    // Allows usage of modern JavaScript
    ecmaVersion: 2020,
    // Allows usage of import statements
    sourceType: 'module',
  },
  settings: {
    react: {
      // Detect React version automatically
      version: 'detect',
    },
  },
  // Specify here any addiitonal rules that might come with third party packages
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // No need for the below since TypeScript will take care of it
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    // No need for the below since TypeScript will take care of it
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    // Prevent eslint from complaining when React is not imported at the beginning of a file containing JSX
    'react/react-in-jsx-scope': 'off',
    // Prevent eslint from complaining when no type has been specified, as type inference takes care of that
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
}
