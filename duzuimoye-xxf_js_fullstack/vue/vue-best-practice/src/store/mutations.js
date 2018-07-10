import * as types from './mutations-type.js'

export default {
    [types.ADD_TOTAL_TIME] (state,time) {
        state.totalTime = state.totalTime + (+time)
    },
    [types.DEC_TOTAL_TIME](state,time){
       state.totalTime = state.totalTime - time 
    },
    [types.SAVE_PLAN](state,plan){
        const avatar = 'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3912547285,312872063&fm=27&gp=0.jpg';
        state.list.push(
            Object.assign({name:'大帅哥',avatar:avatar},plan)
        )
    },
    [types.DELETE_PLAN](state,idx){
        state.list.splice(idx,1);
    }
}