const { src, dest, parallel, series, watch } = require('gulp')
const pugHtml = require('./gulp/tasks/pugHtml')

module.exports.build = series(
  pugHtml
)