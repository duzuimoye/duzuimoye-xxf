<template>
  <div class="index container">
    <top-list :articles="articles"></top-list>
    <p class="load-tip" v-if="isLoading">加载中...</p>
    <p class="load-tip" v-if="noMore">没有更多文章了</p>
  </div>
</template>

<script>
export default {
  head: {
    title: 'Home page'
  },
  data () {
    return {
      isLoading: false,
      noMore: false,
      articles:[
        {
          id: 1,
          content: '### 我来自火星 你来自地球 你是个傻逼吧 我也是好痒'
        }
      ]
    }
  }
}
</script>

<style>

</style>
