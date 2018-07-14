
import * as types from './types'
import { stat } from 'fs';

export default {
    [types.LOGIN]: (state, data) =>{
        localStorage.setItem('token',data)
        state.token = data
    },
    [types.LOGOUT]: (state) =>{
        localStorage.removeItem('token')
        state.token = null
    },
    [types.USENAME]:(state, data) =>{
        localStorage.setItem('username',data)
        state.token = data
    }
}