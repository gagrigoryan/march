import Vue from 'vue'
import Vuex from 'vuex'
import girls from './modules/girls'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {girls}
})