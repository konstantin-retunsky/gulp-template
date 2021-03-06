const { src, dest, parallel, series, watch } = require('gulp')
const pugHtml = require('./gulp/tasks/pugHtml')
const styles = require('./gulp/tasks/styles')
const scripts = require('./gulp/tasks/scripts')
const images = require('./gulp/tasks/images')
const svgSprite = require('./gulp/tasks/svgSprite')
const fonts = require('./gulp/tasks/fonts')
const clean = require('./gulp/tasks/clean')
// const lighthouse = require('./gulp/tasks/lighthouse')
const browserSync = require('./gulp/tasks/browserSync')





module.exports.build = series(browserSync)

