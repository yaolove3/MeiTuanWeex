const identifyTag = require('./identifier')
const components = require('./components')
const hooks = require('./hooks')
const util = require('./util')
const defaults = require('./config')

const arrayMergeOpts = [
  'weexRegisteredComponents',
  'weexBuiltInComponents',
  'aliweexComponents'
]

function mergeConfig(thisConfig, config) {
  if (config) {
    const {
      weexRegisteredComponents,
      weexBuiltInComponents,
      aliweex,
      aliweexComponents
    } = config
  
    // merge all fields except arrays.
    for (const k in config) {
      if (arrayMergeOpts.indexOf(k) <= -1) {
        thisConfig[k] = config[k]
      }
    }
  
    // merge array fields.
    arrayMergeOpts.forEach(function (optName) {
      const vals = config[optName]
      if (util.isArray(vals)) {
        thisConfig[optName] = util.mergeStringArray(
          thisConfig[optName],
          vals
        )
      }
    })
  }

  // At last, set the preservedTags.
  thisConfig.preservedTags = thisConfig.weexRegisteredComponents
    .concat(thisConfig.weexBuiltInComponents)
  if (config && config.aliweex) {
    thisConfig.preservedTags = thisConfig.preservedTags.concat(
      thisConfig.aliweexComponents
    )
  }
}

class Precompiler {
  /**
   * config:
   *  - preservedTags: the preserved weex components tag list. The default
   *    value is: ['a','container','div','image','img','text','input',
   *    'switch','list','scroller','waterfall','slider','indicator',
   *    'loading-indicator','loading','refresh','textarea','video','web'].
   *    If you have other components as plugins installed in weex, you
   *    should add them to this lists, add pass the whole list to this.
   *  - autoprefixer: options for autoprefixer. default is { browsers:
   *    ['> 0.1%', 'ios >= 8', 'not ie < 12'] }.
   *  - px2rem: options for postcss-plugin-px2rem. default is: { rootValue: 75 }
   * @param {*} config
   */
  constructor (config) {
    this.config = defaults
    mergeConfig(this.config, config)
  }

  precompile (el) {
    const attrsMap = el.attrsMap ? el.attrsMap : (el.attrsMap = {})
    const attrsList = el.attrsList ? el.attrsList : (el.attrsList = [])
    const attrs = el.attrs ? el.attrs : (el.attrs = [])
    const staticClass = (el.staticClass || '').replace(/"/g, '')
    const args = [el, attrsMap, attrsList, attrs, staticClass]
  
    const tag = identifyTag(el)

    const {
      weexBuiltInComponents,
      weexRegisteredComponents,
      aliweex,
      aliweexComponents
    } = this.config
    if (weexBuiltInComponents.indexOf(el._origTag || el.tag) > -1) {
      el._weexBuiltIn = true
    }
    else if (
      weexRegisteredComponents.indexOf(el.tag) > -1
      || aliweex && aliweexComponents.indexOf(el.tag) > -1
    ) {
      el._weexRegistered = true
    }
    else {
      el._userRegistered = true
    }

    // use component processors to process components' special attrs.
    const processor = components[tag]
    if (processor) {
      processor.apply(this, args)
    }
  
    // process hooks.  
    for (const k in hooks) {
      hooks[k].apply(this, args)
    }
  }
}

module.exports = function getPrecompiler (config) {
  const precompiler = new Precompiler(config)
  return precompiler.precompile.bind(precompiler)
}
