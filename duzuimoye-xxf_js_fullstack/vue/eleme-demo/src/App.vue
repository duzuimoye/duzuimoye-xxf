<template>
  <div id="app">
    <!-- vue内置组件 -->
    <!-- <router-link to="/login">/login</router-link> -->
    <transition name="router-fade">
      <keep-alive>
        <router-view v-if="$route.meta.keepalive"></router-view>
      </keep-alive>
    </transition>  
    <transition name="route-fade">
      <router-view v-if="!$route.meta.keepalive"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus">
@import './style/common';
// 匹配transition name+enter进来的那一瞬间
// .router-fade-active 会在进入的整个过程 完全进入后会移除这个类名
.router-fade-enter-active,
.router-fade-leave-active{
  transition :opacity 3s;
}
.router-fade-enter, 
.router-fade-leave-active{
  opacity :0;
}

</style>
