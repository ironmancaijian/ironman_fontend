import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import cj from '@/components/cj/index'
import cjHome from '@/components/cj/views/home'
import cjInfo from '@/components/cj/views/info'
import msgBoard from '@/components/cj/views/msgBoard'
import articleDetail from '@/components/cj/views/articleDetail'
import notFound from '@/components/basic/notFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path:'*',
      name:'Code404',
      component:notFound
    },
    {
      path:'/cj',
      component:cj,
      children:[{
        path:'',
        name:'cjHome',
        component:cjHome,
        meta:{
          cname:'主页-蔡健'
        }
      },{
        path:'info',
        name:'info',
        component:cjInfo,
        meta:{
          cname:'个人信息-蔡健'
        }
      },{
        path:'msgBoard',
        name:'msgBoard',
        component:msgBoard,
        meta:{
          cname:'留言板-蔡健'
        }
      }]
    },
    {
      path:'/articleDetail/:id',
      name:'articleDetail',
      component:articleDetail
    }
  ]
})
