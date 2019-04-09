var path = require('path')
function resolve (dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  pages: {
    index: {
      entry: './src/views/index/main.js',
      template: './public/index.html',
      filename: 'index.html',
      title: 'Index Page',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    broadband: { // 宽带地址查询
      entry: './src/views/broadband/main.js',
      template: './public/broadband.html',
      filename: 'broadband.html',
      title: 'Broadband Page',
      chunks: ['chunk-vendors', 'chunk-common', 'broadband']
    }
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
    // subpage: "src/subpage/main.js"
  },
  outputDir: './public/dist',
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
