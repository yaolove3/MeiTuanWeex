const postcss = require('postcss')
const hooks = require('./components')

const propArr = Object.keys(hooks)

const unitsToPx = {
  wx: function transWx (val) {
    return val
  }
}

const unitRegx = function (unit) {
  return new RegExp(`([+-]?\\d+(?:.\\d*)?)(${unit})`, 'gi')
}

const unitWxRegx = unitRegx('wx')

const plugin = postcss.plugin('postcss-plugin-weex', function (opts) {
  return function (root, result) {
    root.walkRules(rule => {
      const appendDecls = []
      rule.walkDecls(decl => {
        const { prop, value } = decl
        /**
         * to support 'wx' unit.
         */
        if (value.match(unitWxRegx)) {
          decl.value = value.replace(unitWxRegx, function ($0, val, unit) {
            return unitsToPx[unit](val) + 'px'
          })
        }
        /**
         * to support weex exclusive styles, such as
         * 'lines' and 'item-size'.
         */
        if (propArr.indexOf(prop) > -1) {
          const styleObj = hooks[prop](value, { root, rule, decl })
          if (!styleObj) {
            return
          }
          for (const k in styleObj) {
            appendDecls.push(postcss.decl({
              prop: k,
              value: styleObj[k]
            }))
          }
        }
      })
      rule.append.apply(rule, appendDecls)
    })
  }
})

module.exports = plugin
