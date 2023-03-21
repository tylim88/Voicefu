module.exports = {
    root: true,
    plugins: ['unused-imports', '@typescript-eslint'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        sourceType: 'module',
        allowImportExportEverywhere: true,
        ecmaVersion: 'latest',
    },
    env: {
        es6: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        'plugin:json/recommended',
        'plugin:markdown/recommended',
        'plugin:yml/prettier',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
        'prettier',
    ],
    ignorePatterns: ['dist', 'backups', 'coverage'],
    rules: {
        'no-console': [
            process.env.CI ? 'error' : 'warn',
            { allow: ['warn', 'error', 'info'] },
        ],
        'react/react-in-jsx-scope': 'off',
        'no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'warn',
        'unused-imports/no-unused-vars': [
            'warn',
            {
                vars: 'all',
                varsIgnorePattern: '^_',
                args: 'after-used',
                argsIgnorePattern: '^_',
            },
        ],
    },
}
