const { src, dest, parallel, series, watch } = require('gulp')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const notify = require("gulp-notify")
const gulpHtmlBemValidator = require('gulp-html-bem-validator');

const pathBuildPug = './source/pages/**/*.pug'

module.exports = function pugHtml(cb) {
  return src(pathBuildPug)
  .pipe(pug({pretty: false}))
    .on('error', notify.onError((err) => `Pug ERROR: ${err.message}`))
  .pipe(rename({dirname: ''}))
  .pipe(gulpHtmlBemValidator())
  .pipe(dest('build'));
}