const { processResize } = require('../components/image')
const { processLines } = require('../components/text')

module.exports = function noneStandardHook (
  el,
  attrsMap,
  attrsList,
  attrs,
  staticClass
) {
  // for image: transform 'resize' attr to directives.
  processResize.call(this, el, attrs)
  // for text: transform 'lines' style to staticStyle.
  processLines.call(this, el)
}
