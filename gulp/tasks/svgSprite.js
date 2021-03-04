const { src, dest, parallel, series, watch } = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')
const imagemin = require('gulp-imagemin');

let spritesSrc = "./source/**/sprite/*.svg"

module.exports = function svgSprite() {
  return src(spritesSrc)
    .pipe(svgstore({
      inlineSvg: true
    }))
    .pipe(imagemin([
      imagemin.svgo({
        plugins: [
            {removeViewBox: true},
            {cleanupIDs: false}
        ]
      })
    ]))
    .pipe(rename('sprite.svg'))
    .pipe(dest('build/img'))
}