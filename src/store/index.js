import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    list: [
      {
        id: 1001,
        name: 'aaa',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
      {
        id: 1002,
        name: 'bbb',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
      {
        id: 1003,
        name: 'ccc',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
      {
        id: 1004,
        name: 'ddd',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
      {
        id: 1005,
        name: 'eee',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
      {
        id: 1006,
        name: 'fff',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
      {
        id: 1007,
        name: 'ggg',
        direction: 'xxx方向',
        comment: false,
        checked: false,
      },
    ],
  },
  mutations: {
    add(state, item) {
      state.list.push(item)
    },
    edit(state, item) {
      let current = state.list.filter((user) => {
        return user.id === item.id
      })
      if (current) {
        Object.assign(current, item)
      }
    },
  },
  actions: {},
  modules: {},
})
