import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      //懒加载
      component(resolve){
        require.ensure(
          ['@/components/Hello.vue'],() =>{
            resolve(require(
              '@/components/Hello.vue'
            ))
          }
        )
      },
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/login',
      name: 'login',
      component(resolve) {
        require.ensure(
          ['@/components/Login.vue'], () =>{
            resolve(require(
              '@/components/Login.vue'
            ))
          }
        )
      }
    },
    {
      path: '*',
      name: 'register',
      component(resolve) {
        require.ensure(
          ['@/components/404.vue'], () =>{
            resolve(require(
              '@/components/404.vue'
            ))
          }
        )
      },
      hidden: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token');
  if(to.meta.requireAuth) {
    if (token) {
      next();
    }else {
      next({
        path:'/login',
        query: {redirect: to.fullPath}
      })
    }
  }else {
    next()
  }
});
