import Vuex from "vuex"
import root from "./module/root"

import Vue from "vue"
Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        root
    },
    strict:false
})