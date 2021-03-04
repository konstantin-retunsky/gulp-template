const { src, dest, parallel, series, watch } = require('gulp')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin');
const gulpWebp = require('gulp-webp');

let imagesSrc = "./source/**/images/*.{jpg,png,svg}"

module.exports = function images() {
  return src(imagesSrc)
  .pipe(imagemin([
    imagemin.optipng({ optimizationLevel: 3 }),
    imagemin.mozjpeg({ quality: 80, progressive: true }),
    imagemin.svgo()
  ]))
  .pipe(rename({dirname: ''}))
  .pipe(dest('build/img'))
  .pipe(src(imagesSrc))
  .pipe(gulpWebp({quality: 80}))
  .pipe(rename({dirname: ''}))
  .pipe(dest('build/img'))
}