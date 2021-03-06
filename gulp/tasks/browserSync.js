const { src, dest, parallel, series, watch } = require("gulp");
const images = require("./images");
const svgSprite = require("./svgSprite");
const styles = require("./styles");
const pugHtml = require("./pugHtml");
const scripts = require("./scripts");

const server = require("browser-sync").create();
const path = require("../pathTasks");

const reload = (done) => {
  server.reload();
  done();
};

module.exports = function browserSync(cb) {
  server.init({
    server: path.browserSync.build,
    notify: false,
    open: true,
    cors: true,
  });

  // gulp.watch('src/img/*.{gif,png,jpg,svg,webp}', gulp.series(imageMinify, readyReload))
  // gulp.watch('src/img/sprite/*.svg', gulp.series(svgSprite, readyReload))
  // gulp.watch('src/img/svg/*.svg', gulp.series(svgO, readyReload))
  // gulp.watch('src/styles/**/*.scss', gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  // gulp.watch('src/js/**/*.js', gulp.series(script, readyReload))
  // watch(path.browserSync.pubHtml, series(pugHtml, readyReload))
  console.log(pugHtml);
  watch("./source/**/*.pug", series(pugHtml, reload));


  // reload()

  cb();
};
