const hooks = {}

hooks.lines = function (value) {
  return {
    overflow: 'hidden',
    'text-overflow': 'ellipsis',
    '-webkit-line-clamp': value
  }
}

module.exports = hooks
