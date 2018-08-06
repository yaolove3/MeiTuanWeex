# weex-vue-precompiler

[![build](https://travis-ci.org/weexteam/weex-vue-precompiler.svg?branch=master)](https://travis-ci.org/weexteam/weex-vue-precompiler)
[![pkg](https://img.shields.io/npm/v/weex-vue-precompiler.svg?style=flat)](https://npmjs.com/package/weex-vue-precompiler)
[![down](https://img.shields.io/npm/dm/weex-vue-precompiler.svg)](https://npmjs.com/package/weex-vue-precompiler)
[![Package Quality](http://npm.packagequality.com/shield/weex-vue-precompiler.svg)](http://packagequality.com/#?package=weex-vue-precompiler)

weex-vue-precompiler is a node transformer plugin for vue-loader. The main purpose is to precompile nodes for [weex-vue-render](https://www.npmjs.com/package/weex-vue-render) to reduce performance consumption in render's runtime.

Use this precompiler can save you a lot of render time for weex running on web using weex-vue-render.

## How To Use

In you vue-loader config, you can use it like this:

```javascript
// require and init.
const precompile = require('weex-vue-precompiler')(/*optional config*/)

// in vue config:
{
  optimizeSSR: false,
  postcss: [
    require('postcss-plugin-weex')(),
    require('autoprefixer')({
      browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12']
    }),
    require('postcss-plugin-px2rem')({ rootValue: 75 })
  ],
  compilerModules: [
    {
      postTransformNode: el => precompile(el)
    }
  ],
}
```

## config

<!-- * `preservedTags`: the preserved weex components tag list. The default value is: `['a','container','div','image','img','text','input','switch','list','scroller','waterfall','slider','indicator','loading-indicator','loading','refresh','textarea','video','web']`. If you have other components as plugins installed in weex, you should add them to this lists, add pass the whole list to this. -->
* `autoprefixer`: options for [autoprefixer](https://github.com/postcss/autoprefixer). default is { browsers: ['> 0.1%', 'ios >= 8', 'not ie < 12'] }.
* `px2rem`: options for [postcss-plugin-px2rem](https://github.com/ant-tool/postcss-plugin-px2rem). default is: { rootValue: 75 }.
* `aliweex`: boolean. default is false. Tell whether aliweex components are included in your project.

## feature

> NOTE: This plugin should only work with weex-vue-render-next in pair, which is > 0.12.xx. The version before 0.13 is not compatible.

- [x] support inline style autoprefix and px2rem converting.
- [x] support tag name converting.
- [x] support style normalization for weex-el, weex-ct, etc.
- [x] add events to element attributes.
