/*
 *  默认配置
 *  storageOptions：vue-ls 配置
 */

export default {
  storageOptions: {
    namespace: 'drg__', // key prefix
    name: 'ls', // name variable Vue.[ls] or this.[$ls],
    storage: 'local' // storage name session, local, memory
  }
}
