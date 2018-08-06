module.exports = [
  {
    type: 1,
    tag: 'custom-component',
    _hasBubbleParent: false,
    _userRegistered: true,
    nativeEvents: {
      'click': {
        value: '$stopOuterA'
      },
      'weex$tap': {
        value: 'click',
        modifiers: {
          stop: true
        }
      }
    },
    plain: false,
    static: false,
    hasBindings: true,
    attrs: [
      {
        name: 'data-evt-click',
        value: '""'
      }
    ]
  }
]
