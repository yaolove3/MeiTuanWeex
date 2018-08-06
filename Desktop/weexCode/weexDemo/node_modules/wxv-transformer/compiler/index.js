const tagMap = {
  text: require('./text')
}

exports.getCompiler = function (tag) {
  return tagMap[tag]
}
