import * as types from './mutations-type.js'

export default {
    [types.ADD_TOTAL_TIME] (state,time) {
        state.totalTime = state.totalTime + time
    }
}