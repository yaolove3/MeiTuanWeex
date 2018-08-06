module.exports = [
  {
    type: 1,
    tag: 'some-cmp',
    _userRegistered: true,
    plain: false,
    hasBindings: true,
    _hasBubbleParent: false,
    events: {
      someEvent: {
        value: 'someHandler'
      }
    },
    nativeEvents: {
      appear: {
        value: 'appear',
        modifiers: {
          stop: true
        }
      }
    },
    attrs: [
      {
        name: 'data-evt-someEvent',
        value: '""'
      },
      {
        name: 'weex-appear',
        value: '""'
      },
      {
        name: 'data-evt-appear',
        value: '""'
      }
    ]
  },
  {
    type: 1,
    tag: 'slider',
    _weexRegistered: true,
    plain: false,
    hasBindings: true,
    _hasBubbleParent: false,
    nativeEvents: {
      change: {
        value: 'change',
        modifiers: {
          stop: true
        }
      },
      appear: {
        value: 'appear',
        modifiers: {
          stop: true
        }
      }
    },
    attrs: [
      {
        name: 'data-evt-change',
        value: '""'
      },
      {
        name: 'weex-appear',
        value: '""'
      },
      {
        name: 'data-evt-appear',
        value: '""'
      }
    ]
  }, {
    type: 1,
    tag: 'div',
    _weexBuiltIn: true,
    plain: false,
    hasBindings: true,
    _hasBubbleParent: false,
    events: {
      appear: {
        value: 'appear',
        modifiers: {
          stop: true
        }
      },
      weex$tap: {
        value: 'click',
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
      }, {
        name: 'weex-appear',
        value: '""'
      }, {
        name: 'data-evt-appear',
        value: '""'
      }
    ],
    staticClass: '" weex-ct weex-div"',
    _origTag: 'div'
  }, {
    type: 1,
    tag: 'input',
    _weexRegistered: true,
    plain: false,
    hasBindings: true,
    _hasBubbleParent: false,
    nativeEvents: {
      return: {
        value: 'onReturn',
        modifiers: {
          stop: true
        }
      }
    },
    attrs: [
      {
        name: 'data-evt-return',
        value: '""'
      }
    ]
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
