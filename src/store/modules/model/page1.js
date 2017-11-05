import axios from 'axios'
// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  incrementpage1 (state) {
    state.count++;
    state.count++;
  },
  decrementpage1 (state) {
    state.count--
  },
  handlepostres(state,params){
    state.count=params;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  incrementpage1: ({ commit }) => commit('incrementpage1'),
  decrementpage1: ({ commit }) => commit('decrementpage1'),
  incrementpage1IfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('incrementpage1')
    }
  },
  incrementpage1Async ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('incrementpage1')
        resolve()
      }, 1000)
    })
  },
  page1testget:function ({commit},params) {
    axios({
      method: 'get',
      url: '/test/greeting',
      params:params
      // params: {
      //   firstName: 'Fred',
      //   lastName: 'Flintstone'
      // }
    }).then(function (response) {
      console.log(response);
    }).catch(function (error) {
      console.log(error);
    });
  },
  page1testpost:function ({commit}) {
    var params = new URLSearchParams();
    params.append('name', 'hello jdmc你好');
    params.append('id', '2');
    axios({
      method: 'post',
      url: '/test/greeting2',
//          data:params
      data: {id: '3', name: 'abc'}
    }).then(function (response) {
      console.log(response);
      commit('handlepostres',response.data.id);
    }).catch(function (error) {
      console.log(error);
    })
  }
}

// getters are functions
const getters = {
  evenOrOddPage1: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default({
  state,
  getters,
  actions,
  mutations
})

