const { configure, presets } = require('eslint-kit')

module.exports = configure({
  extend: {
    plugins: ['import'],
    rules: {
      'no-console': ['error', { allow: ['error'] }],
      'react/jsx-no-bind': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      curly: ['warn'],
      'import/no-cycle': 'error',
    },
  },
  presets: [
    presets.typescript(),
    presets.node(),
    presets.react({ version: '18.0' }),
    presets.prettier(),
    presets.effector(),
  ],
})
