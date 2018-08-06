const { extend } = require('../util')
const transEvtsMap = {
  appear: 'appear',
  offsetAppear: 'offset-appear',
  disappear: 'disappear',
  offsetDisappear: 'offset-disappear'
}

/**
 * check whether has a parent that meet the check-condition.
 * @param {Array<String>} flags a flag is to put on the parent node to
 *    opertimize the next travelsal's efficiency.
 * @param {Array<Function>} checks condition funtions to return true or false.
 * @returns {Array<Boolean>} returns a array with boolean values.
 */
function checkParents (el, flags, checks) {
  let marks
  const len = checks.length
  const results = []
  let cnts = 0  // count for results that already checked out.
  if (!Array.isArray(flags)) {
    flags = [flags]
  }
  if (!Array.isArray(checks)) {
    checks = [checks]
  }
  marks = flags.map((flag) => `_${flag}`)
  let parent = el.parent
  while (parent) {
    if (cnts === len) {
      return results
    }
    checks.forEach((check, idx) => {
      if (typeof results[idx] === 'boolean') {
        return
      }
      const mark = marks[idx]
      let res
      if (check(parent) || parent[mark] === true) {
        res = true
      }
      else if (parent[mark] === false) {
        res = false
      }
      else {
        return
      }
      results[idx] = res
      el[mark] = res
      cnts++
    })
    parent = parent.parent
  }
  for (let i = 0; i < len; i++) {
    if (typeof results[i] !== 'boolean') {
      results[i] = false
      el[marks[i]] = false
      cnts++
      if (cnts === len) {
        return results
      }
    }
  }
  return results
}

function checkBubble (el) {
  return checkParents(
    el,
    ['hasBubbleParent'],
    [function (el) {
      return !!el._bubble
    }]
  )[0]
}

/**
 * bind events and nativeEvents:
 *  - with appear events: weex-appear, data-evt-xxx
 *  - with all weex events: stop propagation by default.
 *  - with click and scroll events: weex$tap and weex$scroll.
 */
function bindEvents(evts, el, attrs, weexEvents, appearAttached) {
  const evtKeys = Object.keys(evts)
  for (let i = 0, l = evtKeys.length; i < l; i++) {
    const key = evtKeys[i]
    const transKey = transEvtsMap[key]
    const evtName = transKey || key
    if (transKey && !appearAttached.value) {
      appearAttached.value = true
      attrs.push({
        name: `weex-appear`,
        value: '""'
      })
    }
    attrs.push({
      name: `data-evt-${evtName}`,
      value: '""'
    })
  }

  const hasBubbleParent = checkBubble(el)

  /**
   * stop propagation by default unless attr 'bubble' is set to true.
   * only for weex events, user defined events should not be stopped
   * by default.
   */
  if (!hasBubbleParent) {
    for (const k in evts) {
      if (weexEvents.indexOf(k) > -1) {
        const evt = evts[k]
        const modifiers = evt.modifiers || (evt.modifiers = {})
        modifiers.stop = true
      }
    }
  }

  /**
   * map event handlers.
   * - click -> weex$tap
   * - scroll -> weex$scroll
   */
  if (evts.click) {
    evts['weex$tap'] = extend({}, evts.click)
    if (!hasBubbleParent) {
      evts.click = {
        value: '$stopOuterA'
      }
    }
  }
  if (evts.scroll) {
    evts['weex$scroll'] = evts.scroll
    delete evts.scroll
  }
}

module.exports = function eventsHook (
  el,
  attrsMap,
  attrsList,
  attrs,
  staticClass
) {
  // bind _bubble attr for every node.
  const bubble = attrsMap.bubble
  if (bubble === 'true' || bubble === true) {
    el._bubble = true
  }

  const { weexEvents } = this.config
  let evts = el.events
  let nativeEvts = el.nativeEvents

  if (nativeEvts && el._builtIn) {
    /**
     * for div, image, text, cell, a, ...
     * user should bind all events without .native.
     */
    nativeEvts = null
    delete el.nativeEvents
  }
  if (el._weexRegistered) {
    /**
     * for slider, list, ...
     * user should bind events without .native.
     * in our events handling, all events should transfer to
     * .native binding.
     */
    delete el.nativeEvents
    nativeEvts = null
    if (evts) {
      nativeEvts = el.nativeEvents = evts
    }
    evts = null
    delete el.events
  }

  const appearAttached = {
    value: false
  }
  if (evts) {
    bindEvents(evts, el, attrs, weexEvents, appearAttached)
  }
  if (nativeEvts) {
    bindEvents(nativeEvts, el, attrs, weexEvents, appearAttached)
  }
  else {
    delete el.nativeEvents
  }

  /**
   * binding a weex$tap to <a> element to stop propagation if there
   * is no bubbles=true flag showing on parents.
   */
  if (el.tag === 'a') {
    if (!evts) {
      evts = el.events = {}
    }
    if (!checkBubble(el)) {
      const evt = evts['weex$tap']
      const val = evt && evt.value
      const inject = '$stopPropagation'
      if (!val) {
        evts['weex$tap'] = {
          value: inject
        }
      }
      else if (Array.isArray(val)) {
        evt.value.unshift(inject)
      }
      else {
        evt.value = [inject, val]
      }
    }
  }
}
