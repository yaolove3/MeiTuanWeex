const postcss = require('postcss')
const hooks = {}

hooks['item-color'] = function (value, opts) {
  const { root, rule, decl } = opts
  const selector = rule.selector
  const newSelector = `${selector} .weex-indicator-item`
  const newRule = postcss.parse(`
${newSelector} {
  background-color: ${value};
}`
  ).first
  rule.parent.insertAfter(rule, newRule)
}

hooks['item-selected-color'] = function (value, opts) {
  const { root, rule, decl } = opts
  const selector = rule.selector
  const newSelector = `${selector} .weex-indicator-item.weex-indicator-item-active`
  const newRule = postcss.parse(`
${newSelector} {
  background-color: ${value};
}`
  ).first
  rule.parent.insertAfter(rule, newRule)
}

hooks['item-size'] = function (value, opts) {
  const { root, rule, decl } = opts
  const selector = rule.selector
  const newSelector = `${selector} .weex-indicator-item`
  const newRule = postcss.parse(`
${newSelector} {
  width: ${value};
  height: ${value};
}`
  ).first
  rule.parent.insertAfter(rule, newRule)
}

module.exports = hooks
