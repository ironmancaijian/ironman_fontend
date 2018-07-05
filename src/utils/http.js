import Vue from 'vue'
import axios from 'axios'
import router from '@/router'

const service = axios.create({
    baseURL:'http://192.168.240.44:3000/',
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
