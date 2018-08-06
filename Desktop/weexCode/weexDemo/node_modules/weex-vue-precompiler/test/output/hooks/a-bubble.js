module.exports = [
  {
    type: 1,
    ref: '"inner"',
    refInFor: false,
    tag: 'div',
    _origTag: 'div',
    _weexBuiltIn: true,
    plain: false,
    hasBindings: true,
    _hasBubbleParent: false,
    events: {
      weex$tap: {
        value: 'innerClick',
        modifiers: {
          stop: true
        }
      },
      click: {
        value: '$stopOuterA'
      }
    },
    attrs: [
      {
        name: 'weex-type',
        value: '"div"'
      }, {
        name: 'data-evt-click',
        value: '""'
      }
    ],
    staticClass: '" weex-ct weex-div"'
  }, {
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
      }, {
        name: 'weex-type',
        value: '"a"'
      }
    ],
    staticClass: '" weex-ct weex-a"',
  }, {
    type: 1,
    tag: 'div',
    _origTag: 'div',
    _weexBuiltIn: true,
    ref: '"outer"',
    refInFor: false,
    _hasBubbleParent: false,
    events: {
      weex$tap: {
        value: 'outerClick',
        modifiers: {
          stop: true
        }
      },
      click: {
        value: '$stopOuterA'
      }
    },
    plain: false,
    attrs: [
      {
        name: 'weex-type',
        value: '"div"'
      }, {
        name: 'data-evt-click',
        value: '""'
      }
    ],
    hasBindings: true,
    staticClass: '" weex-ct weex-div"',
    static: false
  }
]
