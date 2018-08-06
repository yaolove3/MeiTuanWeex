function genPropNode (k, v) {
  return {
    type: 'Property',
    key: {
      type: 'Identifier',
      name: k
    },
    computed: false,
    value: {
      type: 'Literal',
      value: v
    },
    kind: 'init',
    method: false,
    shorthand: false
  }
}

module.exports = function () {
  return {
    compile (objNode, px2remTags, rootValue, transformNode) {
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
          genPropNode('overflow', 'hidden'),
          genPropNode('textOverflow', 'ellipsis')
        ])
      }
      return objNode
    }
  }
}
