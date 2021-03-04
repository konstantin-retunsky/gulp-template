const { src, dest, parallel, series, watch } = require('gulp')
const pugHtml = require('./gulp/tasks/pugHtml')
const style = require('./gulp/tasks/style')

module.exports.build = series(
  pugHtml, style
)