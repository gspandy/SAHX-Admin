/**
 * Created by tangjiang on 16/7/30.
 */
import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import oam_user from './modules/oam_user'

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    getters,
    modules: {
        oam_user
    }
})