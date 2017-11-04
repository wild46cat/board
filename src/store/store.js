import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import Counter from './modules/counter/counter'
import Page1 from './modules/model/page1'
import Page2 from './modules/model/page2'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules:{
    Counter,
    Page1,
    Page2
  }
})
