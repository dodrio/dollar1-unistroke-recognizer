/* eslint-env node */
module.exports = function generateConfig(api) {
  api.cache(true)

  const presets = [
    ['@babel/preset-env', { useBuiltIns: 'usage', modules: false }],
  ]

  return {
    presets,
  }
}
