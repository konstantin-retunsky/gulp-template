const { src, dest, parallel, series, watch } = require('gulp')
const pugHtml = require('./gulp/tasks/pugHtml')
const styles = require('./gulp/tasks/styles')
const scripts = require('./gulp/tasks/scripts')
const images = require('./gulp/tasks/images')
const svgSprite = require('./gulp/tasks/svgSprite')

module.exports.build = series(
  pugHtml, styles, scripts, images, svgSprite
)