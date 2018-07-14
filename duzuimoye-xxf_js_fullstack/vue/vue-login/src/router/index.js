import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Register from '@/components/Register'
import NotFound from '@/components/NotFound'
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
      requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path:'/register',
      name: 'register',
      component: Register
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

router.beforeEach((to,from,next)=>{
  let token = localStorage.getItem('token')
  // 服务器在客户端种下的cookie
  if(to.meta.requireAuth){
    if(token) {
      next()
    }else {
    next({
      path: '/login',
      query: {redirect: to.fullPath}
    })
  }
}
next();
})
export default router