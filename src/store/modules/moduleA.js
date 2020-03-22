export default {
  namespaced: true,
  state: {
    todos: [
      { id: 1, text: "abc", done: true },
      { id: 2, text: "xyz", done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todos => todos.done)
    },
    doneTodosCount: (state, getters) => {
      return getters.doneTodos.length;
    }
  },
  mutations: {},
  actions: {}
};
