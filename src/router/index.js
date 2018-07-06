import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cj from '@/components/cj/index'
import cjHome from '@/components/cj/views/home'
import cjInfo from '@/components/cj/views/info'
import msgBoard from '@/components/cj/views/msgBoard'
import articleDetail from '@/components/cj/views/articleDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/cj',
      component:cj,
      children:[{
        path:'',
        name:'cjHome',
        component:cjHome
      },{
        path:'info',
        name:'info',
        component:cjInfo
      },{
        path:'msgBoard',
        name:'msgBoard',
        component:msgBoard
      }]
    },
    {
      path:'/articleDetail/:id',
      name:'articleDetail',
      component:articleDetail
    }
  ]
})
