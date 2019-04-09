/*
 *  vue.config.js 文件入口配置
 */
const DEFAULT_BUILD_MODULE = require('./mutation-type').mutaions.DEFAULT_BUILD_MODULE // 默认打包模块
const orderType = process.argv[2] // 命令类型
const glob = require('glob')
const path = require('path')

function getPagesName (VIEWS_PATH) { // 获取全部入口文件名
  const nameList = []
  glob.sync(VIEWS_PATH + '/*/main.js').forEach(filepath => {
    const pageName = path.basename(path.dirname(filepath))
    nameList.push(pageName)
  })
  return nameList
}

function pageConfig (nameList) {
  const pagesConfig = {}
  nameList.forEach((projectname) => {
    pagesConfig[projectname] = {
      entry: './src/views/' + projectname + '/main.js',
      template: './public/' + projectname + '.html',
      filename: `${projectname}.html`,
      title: `${projectname} Page`,
      chunks: ['chunk-vendors', 'chunk-common', projectname]
    }
  })
  return pagesConfig
}

function setPages (VIEWS_PATH) {

  const allPages = getPagesName(VIEWS_PATH)

  if (orderType === 'build') { // 动态添加 pages
    const modulename = process.argv[3] === undefined ? DEFAULT_BUILD_MODULE : process.argv[3] // 执行 build 命令操作的模块名
    if (allPages.includes(modulename)) {
      return pageConfig([modulename])
    } else {
      console.warn('======== 打包模块名不存在 ========')
      return false
    }
  } else { // 添加所有pages
    return pageConfig(allPages)
  }
}
exports.setPages = setPages
