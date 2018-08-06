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
    staticClass: '" weex-el weex-text"',
    styleBinding: "{ 'margin-left': _px2rem('20px', 75), 'marginBottom': _px2rem('10px', 75)}",
  }, {
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
    staticClass: '" weex-el weex-text"',
    styleBinding: "{ 'margin-left': _px2rem(myMargin + 'px', 75) }",
  }, {
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
    staticClass: '" weex-el weex-text"',
    styleBinding: "_processExclusiveStyle(myData.styles, 75, 'text')",
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
    styleBinding: "_px2rem(myData.styles, 75)",
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
    styleBinding: "_px2rem(getStyles('div'), 75)",
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
    styleBinding: "isMyTheme ? { marginLeft: _px2rem('20px', 75) } : _px2rem(yourStyles, 75)",
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
    styleBinding: "isMyTheme ? _px2rem(myStyles, 75) : _px2rem(yourStyles, 75)",
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
