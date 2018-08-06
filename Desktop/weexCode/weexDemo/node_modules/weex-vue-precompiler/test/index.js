const path = require('path')
const fs = require('fs-extra')
const webpack = require('webpack')
const expect = require('chai').expect
const merge = require('webpack-merge')
const compile = require('../src/index')()
const baseWebpackConfig = require('./webpack.config')
const getVueLoader = require('./get-vue-loader')

const inputDir = path.resolve(__dirname, './input')
const outputDir = path.resolve(__dirname, './output')

function getWebpackConfig (entry, cb) {
  return merge(baseWebpackConfig, {
    entry,
    module: {
      rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        options: getVueLoader(cb)
      }]
    }
  })
}

function walk (dir) {
  dir = dir || '.'
  const dirPath = path.resolve(inputDir, dir)
  const files = fs.readdirSync(dirPath)
  files.forEach(function (file) {
    const filePath = path.resolve(dirPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      return walk(path.join(dir, file))
    }
    else if (stat.isFile()) {
      const extName = path.extname(filePath)
      if (extName !== '.vue') {
        return
      }
      const baseName = path.basename(filePath, extName)
      runTest(path.join(dir, file).replace(extName, ''), filePath)
    }
  })
}

function runTest(specName, filePath) {
  const outputs = require(path.resolve(outputDir, `${specName}.js`))
  it (`${specName}`, function (done) {
    const els = []
    const config = getWebpackConfig({
      [specName]: filePath
    }, function (el) {
      // console.log('========>el', el.tag)
      compile(el)
      delete el.parent
      delete el.children
      delete el.attrsList
      delete el.attrsMap
      els.push(el)
    })
    webpack(config, function (err, stats) {
      if (err) {
        return console.error('error => ', err)
      }
      // console.log('els===>', JSON.stringify(els, null, 2))
      expect(els).to.deep.equal(outputs)
      done()
    })
  })
}

describe('output tests', function () {
  walk()
})
