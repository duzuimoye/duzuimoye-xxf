import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import  actions from './actions'
import getters from './getters'

Vue.use(Vuex);

const state ={
    latitude:'',
    longtitude:'',
    cartList:{},
    userInfo:null,
    shopId:null,
    products:[],
    shopDetail:null
    // lbs 应用
}
export default new Vuex.Store({
    state,
    getters,
    actions,
    mutations
})
