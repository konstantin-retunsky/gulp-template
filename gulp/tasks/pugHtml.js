const { src, dest, parallel, series, watch } = require('gulp')
const pug = require('gulp-pug')
const rename = require('gulp-rename')
const notify = require("gulp-notify")
const gulpHtmlBemValidator = require('gulp-html-bem-validator');
const plumber = require('gulp-plumber')

const pathSrcPug = './source/pages/**/*.pug'

module.exports = function pugHtml(cb) {
  return src(pathSrcPug)
    .pipe(plumber())
    .pipe(pug({pretty: false}))
      .on('err', notify.onError((err) => `Pug err: ${err.message}`))
    .pipe(rename({dirname: ''}))
    .pipe(gulpHtmlBemValidator())
    .pipe(dest('build'));
}