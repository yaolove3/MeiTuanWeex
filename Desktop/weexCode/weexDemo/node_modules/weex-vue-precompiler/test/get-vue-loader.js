module.exports = function (transform) {
  return {
    compilerModules: [
      {
        postTransformNode: el => {
          transform(el)
        }
      }
    ]
  }
}
