import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

let baseUrl = process.env.NODE_ENV == 'development'?'http://192.168.250.232':'http://118.25.100.171:80';
const service = axios.create({
    baseURL:baseUrl,
    timeout:5000,
})
//添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(localStorage.getItem('adminToken')){
        config.headers['Authorization'] = localStorage.getItem('adminToken')
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (res) {
    // 对响应数据做点什么
    
    return res;
  }, function (error) {
    // 对响应错误做点什么
   
    return Promise.reject(error);
  });

  export default service
