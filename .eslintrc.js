module.exports = {
    'extends': 'google',
    'parserOptions': {
        'ecmaVersion': 2022,
        'sourceType': 'module'
    },
    'root': true,
    'env': {
        'node': true
    },
    'rules': {
        'indent': [2, 4, {'SwitchCase': 1}],
        'max-len': [2, {
            'code': 140,
            'ignoreComments': true
        }],
        'no-bitwise': 'off',
        'no-param-reassign': 'warn',
        'no-plusplus': 'off',
        'no-console': 'error',
        'no-case-declarations': 'off',
        'comma-dangle': 'off',
        'object-curly-spacing': 'off',
        'linebreak-style': ['error', 'windows'],
        'require-jsdoc': 'off',
        'new-cap': 'off',
        'space-before-function-paren': [
            'error', {
                'anonymous': 'always',
                'named': 'always',
                'asyncArrow': 'ignore'
            }
        ]
    }
};
