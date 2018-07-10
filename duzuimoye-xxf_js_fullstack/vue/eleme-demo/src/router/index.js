import Vue from 'vue'
import Router from 'vue-router'
import { SSL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from 'constants';
const home =() =>import('@/page/home')
const login =() =>import('@/page/login')
const city = () =>import ('@/page/city')
const msite = () =>import ('@/page/msite')
// import home from '@/page/home'
// lazyload
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path:'/home',
      component:home
    },
    {
      path:'/login',
      component:login,
      meta:{
        keepalive:true
      }

    },
    {
      path:'/city/:cityid',   //动态路由
      component:city
    },
    {
      path:'/msite',   
      component:msite
      
    }
  ]
})
