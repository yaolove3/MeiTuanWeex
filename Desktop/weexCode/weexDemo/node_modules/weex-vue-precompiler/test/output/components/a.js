module.exports = [
  {
    type: 1,
    tag: 'a',
    _weexBuiltIn: true,
    _hasBubbleParent: false,
    events: {
      'weex$tap': {
        value: '$stopPropagation'
      }
    },
    plain: false,
    attrs: [
      {
        name: 'href',
        value: '"#"'
      },
      {
        name: 'weex-type',
        value: '"a"'
      }
    ],
    staticClass: '" weex-ct weex-a"'
  }, {
    type: 1,
    tag: 'div',
    _weexBuiltIn: true,
    plain: false,
    attrs: [
      {
        name: 'weex-type',
        value: '"div"'
      }
    ],
    staticClass: '" weex-ct weex-div"',
    static: false,
    _origTag: 'div'
  }
]
