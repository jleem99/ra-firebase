module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',

        'plugin:import/recommended',
        'plugin:import/typescript',

        'plugin:prettier/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {},
        ecmaVersion: 13,
        sourceType: 'module',
        project: ['./tsconfig.json'],
        tsconfigRootDir: __dirname,
    },
    plugins: ['unused-imports'],
    ignorePatterns: [
        'dist',
        '*.config.js',
        '.eslintrc.js',
        '__tests__',
        '*-test.js',
        '*-test.ts',
    ],
    rules: {
        /* eslint-plugin-unused-imports */
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 1,
        'unused-imports/no-unused-vars': [
            'off',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],

        /* fix enum's no-shadow false positive */
        'no-shadow': 0,
        '@typescript-eslint/no-shadow': 2,

        /* other rules */
        'react/no-unescaped-entities': 0,
        'no-void': 0,
        'import/no-named-as-default-member': 0,
        '@typescript-eslint/explicit-module-boundary-types': 0,
        '@typescript-eslint/no-explicit-any': 0,
        '@typescript-eslint/unbound-method': 0, // auto-bind fixes this issue
        '@typescript-eslint/require-await': 0,
        '@typescript-eslint/no-empty-function': 1,
        '@typescript-eslint/no-empty-interface': 1,

        '@typescript-eslint/no-non-null-assertion': 0, // Non-Null이 확실할 때만 사용
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                'no-undef': 'off',
            },
        },
    ],
}
