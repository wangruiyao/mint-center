let path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}

// 默认打包模块名
const DEFAULT_BUILD_MODULE = require('./src/config/mutation-type').mutaions.DEFAULT_BUILD_MODULE
console.log(DEFAULT_BUILD_MODULE)
// 入口配置
let pagesConfig = require('./src/config/pagesSetting').setPages(resolve('src/views'))

module.exports = {
  pages: pagesConfig,
  outputDir: 'dist/' + (process.argv[3] === undefined ? DEFAULT_BUILD_MODULE : process.argv[3]),
  publicPath: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  css: {
    loaderOptions: {
      postcss: { // 配置px2rem
        plugins: [
          require('postcss-px2rem')({
            remUnit: 37.5
          })
        ]
      },
      sass: {
        data: `
          @import "./src/assets/styles/variables.scss";
          @import "./src/assets/styles/mixins.scss";
        `
      }
    }
  },
  productionSourceMap: false, // 打包时忽略 .js.map文件
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    // historyApiFallback: true, // history模式开启
    proxy: {
      '/api': {
        target: 'http://yapi.imeete.com/mock/320',
        changeOrigin: true
      }
    },
    historyApiFallback: {
      rewrites: [
        {
          from: /\/broadband/,
          to: '/broadband.html'
        },
        {
          from: /\//,
          to: '/index.html'
        }
      ]
    }
  },
  chainWebpack: (config) => {
    config.resolve.alias
      .set('src', resolve('src'))
      .set('api', resolve('src/api'))
      .set('assets', resolve('src/assets'))
      .set('components', resolve('src/components'))
      .set('plugins', resolve('src/plugins'))
      .set('utils', resolve('src/utils'))
      .set('views', resolve('src/views'))
      .set('core', resolve('src/core'))
      .set('store', resolve('src/store'))
      .set('router', resolve('src/router'))
    config.output.filename('[name].[hash].js').end()
  }
}
