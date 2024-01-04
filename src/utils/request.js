import { useEffect, useCallback } from 'react'
import axios from 'axios'
import { useRequest } from 'ahooks'

// 初始化
const instance = axios.create({})

// 请求拦截器
instance.interceptors.request.use((config) => {
  return config
})

instance.interceptors.response.use(
  (response) => {
    // 处理成功的响应
    return response
  },
  (error) => {
    // 处理失败的响应
    if (axios.isCancel(error)) {
      // 请求被取消，不做处理
      console.log('请求被取消', error.message)
    }
    if (error?.response || error?.code) {
      // 网关超时，返回一个默认值
      return Promise.reject({
        success: false,
        message: error?.message || error.msg,
      })
    } // 其他错误，抛出异常
    return Promise.reject(error)
  },
)

export const runRquest = {
  get(url, data = {}) {
    return instance.get(url, {
      params: {
        ...data,
      },
    })
  },
  post(url, data = {}) {
    return instance.post(url, data)
  },
}

export const useRunRquest = (url = '', method = 'post', options = { manual: false }) => {
  const server = useCallback((requestData = {}) => runRquest[method](url, requestData), [url, method])
  const rquest = useRequest(server, { ...options })
  const { data, loading, run } = rquest
  return {
    data: data?.data?.data,
    loading,
    run,
  }
}
