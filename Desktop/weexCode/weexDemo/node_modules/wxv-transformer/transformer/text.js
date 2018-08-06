module.exports = {
  transform (style) {
    const lines = style.lines
    if (lines > 0) {
      return Object.assign(style, {
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitLineClamp: lines
      })
    }
    return style
  }
}
