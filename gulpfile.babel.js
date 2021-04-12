import {gulp, series} from 'gulp';
import config from './gulp/config';
import { scriptsBuild, scriptsWatch } from './gulp/tasks/scripts';

config.setEnv();

export const build = series(
  scriptsBuild,
);

export const watch = series(
  build,
  scriptsWatch,
);
