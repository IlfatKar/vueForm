/* eslint-env node */
// eslint-disable-next-line import/no-internal-modules
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting',
    '@feature-sliced'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    'import/no-internal-modules': 0,
    'vue/multi-word-component-names': 0
  }
}
