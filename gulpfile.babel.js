import gulp from 'gulp';
import config from './gulp/config';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';

config.setEnv();

export const build = gulp.series(
  scriptsBuild,
);

export const watch = gulp.series(
  build,
  scriptsWatch,
);
