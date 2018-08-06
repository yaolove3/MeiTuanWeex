const div = require('./div')
const image = require('./image')
const text = require('./text')
const a = require('./a')
const cell = require('./cell')

const cmpMaps = { div, image, text, a, cell }

module.exports = {
  div: div.processDiv,
  figure: image.processImage,
  p: text.processText,
  a: a.processA,
  section: cell.processCell,
  // get ast compiler for binding styles.
  getCompiler: function (tag) {
    const cmp = cmpMaps[tag]
    const compile = cmp && cmp.compile
    return compile ? { compile } : undefined
  }
}
