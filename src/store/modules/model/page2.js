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
  incrementpage2 (state) {
    state.count++;
  },
  decrementpage2 (state) {
    state.count--;
    state.count--;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  incrementpage2: ({ commit }) => commit('incrementpage2'),
  decrementpage2: ({ commit }) => commit('decrementpage2'),
  incrementpage2IfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('incrementpage2')
    }
  },
  incrementpage2Async ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('incrementpage2')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOddPage2: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default({
  state,
  getters,
  actions,
  mutations
})

