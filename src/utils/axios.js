import Vue from 'vue'
import qs from 'qs'
import axios from 'axios'
import Router from 'router'
import { Toast, MessageBox } from 'mint-ui'
import ACCESS_TOKEN from '@/store/mutation-type'

const Axios = axios.create({
  baseURL: '/api',
  timeout: 10000,
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

// 添加请求拦截器  (参数序列化)
Axios.interceptors.request.use(
  config => {
    // 发送请求之前做的事 XD

    // 鉴权token, 给头部带上token
    // localStorage一般是请求成功之后自行写入本地的
    // 必要的数据优先写入本地从本地读取

    const token = Vue.ls.get(ACCESS_TOKEN)
    if (token) {
      config.headers[ 'Access-Token' ] = token // 每个请求携带自定义token
    }
    return config
  },
  error => {
    Toast({
      message: '操作失败',
      iconClass: 'icon icon-success'
    })
    return Promise.reject(error)
  }
)

// 添加响应拦截器  （判断返回状态）
Axios.interceptors.response.use(
  response => {
    // 操作响应数据
    return response
  },
  error => {
    // 用户登录的时候会拿到基本信息， 储存在localStorage中
    if (error.response.status === 403) {
      Router.push({
        path: '/error-403'
      })
    }
    if (error.response.status === 401) {
      MessageBox.alert('登录状态信息过期,请重新登录').then(action => {
        // 登出并刷新
      })
    }
    return Promise.reject(error)
  }
)
