import gulp from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';
import gulpif from 'gulp-if';
import config from '../config';

export const scriptsBuild = () => (

);

export const scriptsWatch = () => gulp.watch(`${config.src.js}/**/*.js`, scriptsBuild);
