const tagMap = {
  text: require('./text')
}

exports.getTransformer = function (tag) {
  return tagMap[tag]
}
