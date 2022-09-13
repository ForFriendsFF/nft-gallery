module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier', '@typescript-eslint', 'unicorn'],
  rules: {
    'no-trailing-spaces': 'error',
    'unicorn/no-for-loop': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: false }],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'IfStatement > :not(BlockStatement).consequent',
        message: 'Use blockstatement after if, please check STYLE_GUIDE.md',
      },
    ],
    'no-useless-catch': 1,
    'no-var': 'error',
    'linebreak-style': 0,
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    'max-classes-per-file': ['error', 2],
    'sort-imports': [
      'warn',
      {
        ignoreDeclarationSort: true,
        allowSeparatedGroups: true,
      },
    ],
  },
 export default defineConfig({
  plugins: [createVuePlugin(/* options */), graphql()],
  test: {
    include: ['tests/**/?(*.)+(spec|test).+(ts|tsx|js)'],
    exclude: [
      '**/node_modules/**',
      '**/dist/**',
      '**/cypress/**',
      '**/.{idea,git,cache,output,temp}/**',
    ],
    globals: true,
    environment: 'jsdom',
    alias: [{ find: /^vue$/, replacement: 'vue/dist/vue.runtime.common.js' }],
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './'),
      '~': resolve(__dirname, './'),
    },
  },
})
ignorePatterns: ['*.md'],
  overrides: [
    {
      files: ['layouts/**/*.{js,ts,vue}', 'pages/**/*.vue'],
      rules: {
        'vue/multi-word-component-names': 'off',
      },
    },
  ],
}
