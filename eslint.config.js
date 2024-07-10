import js from '@eslint/js';

export default [
    js.configs.recommended,

    {
        rules: {
            'no-unused-vars': 'warn',
            'no-undef': 'warn',
            'react-hooks/rules-of-hooks': 'warn',
            'react-hooks/exhaustive-deps': 'warn',
        },
    },
];
