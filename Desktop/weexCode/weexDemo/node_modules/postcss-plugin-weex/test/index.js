const fs = require('fs-extra')
const postcss = require('postcss')
const chai = require('chai')
const path = require('path')

const pluginWeex = require('../src/index')

const expect = chai.expect

function resolve(p) {
  return path.resolve(__dirname, '../', p)
}

const inputPath = resolve('./test/data/input')
const outputPath = resolve('./test/data/output')

function walk (dir, lvl, describe) {
  dir = dir || '.'
  lvl++
  const dirPath = path.resolve(inputPath, dir)
  const paths = fs.readdirSync(dirPath)
  paths.forEach(function (file) {
    const filePath = path.resolve(dirPath, file)
    const stat = fs.statSync(filePath)
    if (stat.isDirectory()) {
      if (lvl === 1) {
        const nextDir = path.join(dir, file)
        describe(nextDir, function () {
          walk(nextDir, lvl, describe)
        })
      }
      else {
        walk(path.join(dir, file), lvl, describe)
      }
    }
    else if (stat.isFile()) {
      it(path.join(dir, file), function () {
        const ipt = fs.readFileSync(
          path.resolve(dirPath, file),
          'utf8'
        )
        const opt = fs.readFileSync(
          path.resolve(outputPath, dir, file),
          'utf-8'
        )
        const result = postcss([ pluginWeex() ])
          .process(ipt)
          .css
        expect(result).to.equal(opt)
      })
    }
  })
}

describe('postcss-plugin-weex', function () {
  walk('.', 0, describe)
})
