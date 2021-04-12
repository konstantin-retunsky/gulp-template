const srcPath = 'src';
const destPath = 'build';

const config = {
  src: {
    root: srcPath,
    sass: `${srcPath}/scss`,
    scripts: `${srcPath}/{blocks,global}/**/*.js`,
    fonts: `${srcPath}/assets/fonts`,
    images: `${srcPath}/assets/images`,
    iconsMono: `${srcPath}/assets/icons/mono`,
    iconsMulti: `${srcPath}/assets/icons/multi`,
    pug: `${srcPath}/pug`,
  },

  build: {
    root: destPath,
    html: destPath,
    css: `${destPath}/css`,
    scripts: `${destPath}/js`,
    fonts: `${destPath}/fonts`,
    images: `${destPath}/images`,
  },

  setEnv() {
    this.isProd = process.argv.includes('--prod');
    this.isDev = !this.isProd;
  },
};

export default config;
