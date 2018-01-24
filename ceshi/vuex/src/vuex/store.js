import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
    count:1
}
const mutations = {
    add(state) {
        setTimeout(() => {
            console.log(2222222)
            state.count++;
        }, 2000);
    },
    reduce(state) {
        state.count--;
    }
}
export default new Vuex.Store({
state,
mutations
})