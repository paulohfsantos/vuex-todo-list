import axios from 'axios'

const state = {
  // initial state
  todos: []
}

const getters = {
  // get the current initial state and returns
  allTodos: (state) => state.todos
}

const actions = {
  async fetchAllTodos({ commit }) {
    const res = await axios.get('http://localhost:5000/tasks')

    console.log('action', res.data)
    commit('setTodos', res.data)
  }
}

const mutations = {
  setTodos: (state, todos) => {
    console.log('mutation', state, todos)
    return (state.todos = todos)
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
