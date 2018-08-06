const postcss = require('postcss')

function getPlaceholderColorCSS (selector, placeholderColor) {
  const vendors = [
    '::-webkit-input-placeholder',
    ':-moz-placeholder',
    '::-moz-placeholder',
    ':-ms-input-placeholder',
    ':placeholder-shown'
  ]
  const css = vendors.map(function (vendor) {
    return `
${selector}${vendor} {
  color: ${placeholderColor};
}`
  }).join('\n')
  return css
}

const hooks = {}

hooks['placeholder-color'] = function (value, opts) {
  const { root, rule } = opts
  const selector = rule.selector
  root.insertAfter(rule, getPlaceholderColorCSS(selector, value))
}

module.exports = hooks
