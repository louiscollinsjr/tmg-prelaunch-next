// eslint.ts
module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
          project: './tsconfig.json',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    extends: [
          'eslint:recommended',
          'plugin:@typescript-eslint/recommended',
          'plugin:@typescript-eslint/recommended-requiring-type-checking',
          'next/core-web-vitals',
      ],
    plugins: ['@typescript-eslint'],
      rules: {
        "@typescript-eslint/no-explicit-any": ["error", {
          "ignoreRestArgs": true,
           "ignoreTypeArgs": true
        }],
    },
      overrides:[{
        files: ["*.d.ts"],
         rules: {
           "@typescript-eslint/no-explicit-any": "off"
         }
      }]
  };