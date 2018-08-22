import Vue from 'vue'
import TopList from '../components/top-list.vue'

// topLise成为一个全局组件
const components = {TopList};
Object.keys(components).forEach(key =>{
  Vue.component(key, components[key])
})