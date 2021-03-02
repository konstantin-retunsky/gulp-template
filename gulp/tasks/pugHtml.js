const { src, dest, parallel, series, watch } = require('gulp')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const notify = require("gulp-notify")

const pathBuildPug = './source/pages/**/*.pug'

module.exports = function pugHtml(cb) {
  return src(pathBuildPug)
  // .pipe(plumber())
  .pipe(pug({pretty: false}))
    .on('error', notify.onError((err) => `Pug ERROR: ${err.message}`))
  .pipe(rename({dirname: ''}))
  .pipe(dest('build'));
}