import Vue from 'vue'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

if (Mint) {
  Vue.use(Mint)
} else {
  console.warn('请加载Mint-ui')
}
