const { src, dest, parallel, series, watch } = require('gulp')
const fs = require('fs')
const rename = require('gulp-rename')
const notify = require("gulp-notify")
const plumber = require('gulp-plumber')
const concat = require('gulp-concat')
const sass = require('gulp-sass');

const srcStyle = './source/pages/**/*.sass'
const srcGlobal = './source/global/sass/global_style.sass'
// fs.existsSync(path)

module.exports = function sytle(cb) {
  return src([srcGlobal, srcStyle])
    .pipe(sass().on('error', sass.logError))
    .pipe(rename({dirname: ''}))
    .pipe(concat('style.css'))
    .pipe(dest('build/css'))
}