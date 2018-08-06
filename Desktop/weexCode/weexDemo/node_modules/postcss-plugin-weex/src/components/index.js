const components = {
  text: require('./text'),
  indicator: require('./indicator'),
  input: require('./input')
}

const hooks = Object.keys(components).reduce(function (pre, key) {
  return Object.assign(pre, components[key])
}, {})

module.exports = hooks
