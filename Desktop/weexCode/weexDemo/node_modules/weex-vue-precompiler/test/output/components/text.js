const { extend } = require('../../../src/util')

module.exports = [
  {
    type: 1,
    tag: 'p',
    _origTag: 'text',
    _weexBuiltIn: true,
    plain: false,
    attrs: [
      {
        name: 'weex-type',
        value: '"text"'
      }
    ],
    staticClass: '"txt weex-el weex-text"',
    staticStyle: JSON.stringify(extend(
      {
        lines: '1'
      }, {
        overflow: 'hidden',
        'text-overflow': 'ellipsis',
        '-webkit-line-clamp': '1'
      }
    ))
  }, {
    type: 1,
    tag: 'div',
    _origTag: 'div',
    _weexBuiltIn: true,
    plain: false,
    attrs: [
      {
        name: 'weex-type',
        value: '"div"'
      }
    ],
    staticClass: '" weex-ct weex-div"',
    static: false
  }
]
