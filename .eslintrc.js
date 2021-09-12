module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended'
    ],
    'parser': '@typescript-eslint/parser',
    'parserOptions': {
        'ecmaVersion': 12
    },
    'plugins': [
        '@typescript-eslint'
    ],
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        '@typescript-eslint/no-inferrable-types':   'off',  // Intentionally turned off
        'non-var':                                  'off',  // Intentionally turned off
        'prefer-const':                             'off',  // Intentionally turned off
        'no-unused-vars':       'error',
        'no-global-assign':     'error',
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector:           'variable',
                format:             ['snake_case'],
                leadingUnderscore:  'allow',
                trailingUnderscore: 'allow',
            },
            {
                selector:           'variable',
                modifiers:          ['const'],
                format:             ['UPPER_CASE'],
                leadingUnderscore:  'allow',
                trailingUnderscore: 'allow',
            }
        ]
    }
};
