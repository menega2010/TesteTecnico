import { Linter } from 'eslint';

const config = {
  // Defina o ambiente (node, browser, es2021)
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  // Extensões recomendadas e plugins
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended',
  ],
  // Plugins adicionais
  plugins: ['@typescript-eslint', 'import', 'prettier'],
  // Regras personalizadas
  rules: {
    'prettier/prettier': 'error', // Integração com Prettier
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'no-console': 'warn',
    'import/order': [
      'error',
      {
        groups: [['builtin', 'external', 'internal']],
        'newlines-between': 'always',
      },
    ],
    'import/no-unresolved': 'error',
  },
  // Configurações do parser
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  // Inclusão de arquivos TypeScript
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: ['./tsconfig.json'],
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended', // Regras recomendadas do TypeScript
      ],
      rules: {
        // Regras específicas para arquivos TypeScript
        '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      },
    },
  ],
};

export default config;