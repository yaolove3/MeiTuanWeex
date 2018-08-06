const util = require('../util')
const {
  ast,
  extend,
  getStaticStyleObject
} = util

function getLinesStaticStyle (n) {
  return {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    '-webkit-line-clamp': `${n}`
  }
}

exports.processLines = function (el) {
  const tag = el._origTag || el.tag
  if (
    this.config.preservedTags.indexOf(tag) > -1
    && tag !== 'text') {
    return
  }
  const staticStyle = getStaticStyleObject(el)
  const n = parseInt(staticStyle.lines)
  if (n > 0 && !isNaN(n)) {
    extend(staticStyle, getLinesStaticStyle(n))
    el.staticStyle = JSON.stringify(staticStyle)
  }
}

exports.processText = function (
  el,
  attrsMap,
  attrsList,
  attrs,
  staticClass
) {
  const finalClass = staticClass + ' weex-el weex-text'
  el.staticClass = `"${finalClass}"`
  attrs.push({
    name: `weex-type`,
    value: '"text"'
  })
  delete el.ns
  el.plain = false
}

// deal with binding-styles ast node.
exports.compile = function (objNode, px2remTags, rootValue, transformNode) {
  const props = objNode.properties
  let hasLines = false
  for (let i = 0, l = props.length; i < l; i++) {
    const propNode = props[i]
    const keyNode = propNode.key
    const keyType = keyNode.type
    const keyNodeValStr = keyType === 'Literal' ? 'value' : 'name'
    const keyName = keyNode[keyNodeValStr]
    const valNode = propNode.value
    if (keyName === 'lines') {
      hasLines = true
      keyNode[keyNodeValStr] = 'webkitLineClamp'
    }
    else if (px2remTags.indexOf(keyName) > -1) {
      propNode.value = transformNode(propNode.value, 'text', rootValue, true/*asPropValue*/)
    }
  }
  if (hasLines) {
    objNode.properties = props.concat([
      ast.genPropNode('overflow', 'hidden'),
      ast.genPropNode('textOverflow', 'ellipsis')
    ])
  }
  return objNode
}
