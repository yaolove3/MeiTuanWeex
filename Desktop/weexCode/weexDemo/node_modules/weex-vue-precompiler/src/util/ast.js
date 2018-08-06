const esprima = require('esprima')

exports.genPropNode = function (k, v) {
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

exports.parseAst = (function () {
  const _cached = {}
  return function (val) {
    let statement = 'a = '
    if (typeof val === 'object') {
      statement += `${JSON.stringify(val)}`
    }
    else {
      statement += val
    }
    const cached = _cached[statement]
    if (cached) {
      return cached
    }
    const ast = esprima.parse(statement)
      .body[0].expression.right
    _cached[statement] = ast
    return ast
  }
})()
