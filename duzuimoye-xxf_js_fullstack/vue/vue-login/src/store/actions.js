import * as types from './types'
import api from '@/api'
// commit mutation, api 设计的路口

export default {
    UserLogin({commit},data){
        commit(types.LOGIN,data)
    },
    UserLogout({commit}){
        commit(types.LOGOUT)
    },
    UserName({commit},data){
        commit(types.USENAME,data)
    }
}