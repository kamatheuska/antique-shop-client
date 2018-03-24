import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true, // set to false in production
  state: {
    credentials: {
      user: ''
    },
    navmenu: [
      { 
        name: 'MOVIMIENTOS',
        children: ['VENDER', 'COMPRAR'],
        routes: ['/movements/sell', '/movements/buy'],
        sel: false
      },
      { 
        name: 'DATOS',
        children: ['AÑADIR ITEM', 'CONSULTAR'],
        routes: ['/data/add', 'data/consult'],
        sel: false
      },
      { name: 'INICIO', routes: ['/'] },
    ],
    addItemForm: [
      {
        name: 'VALORES',
        children: [],
        sel: true
      },
      {
        name: 'ESPECIFICACIONES',
        children: [],
        sel: false
      },
      {
        name: 'NOTAS',
        children: [],
        sel: false
      }
    ]
  },
  getters: {
    getParentSelected: (state) => (menuName, parentObj) => { 
      let result = state[menuName].filter(parent => parent.name === parentObj.name)
      console.log('-*-*-*-*-* GETTER1', result);
      return result
    },
    getNonSelectedParents: (state, getters) => (menuName) => 
      state[menuName].filter(parent => parent.sel !== true)
  },
  mutations: {
    UPDATE: (state, payload) => {
      state.credentials.user = payload.toLowerCase()
      .split(' ')
      .map((word) =>
        word.replace(word[0], word[0].toUpperCase()))
      .join(' ')
    },
    HIDE_ALL_MENUS: (state, menuName) =>
      state[menuName].forEach(parent => parent.sel = false),
    SELECT_MENU: (state, parent) => parent[0].sel = !parent[0].sel,
    HIDE_OTHER_MENUS: (state, parents) => 
      parents.forEach(parent => parent.sel = false)
  },
  actions: {
    showChildSelected: ({ commit, getters }, { name, parent }) => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          let selectedParent = getters.getParentSelected(name, parent)
          commit('SELECT_MENU', selectedParent)
          resolve()
        }, 500);
      })
    },
    hideOtherChilds: ({ commit, getters }, { name }) => {
      return new Promise((resolve, reject) => {
        // setTimeout(() => {
          commit('HIDE_ALL_MENUS', name)
          resolve()
        // }, 2000);
      })
    },
    toggleParentChild ({ dispatch, commit, getters }, { name, parent }) {
      return dispatch('hideOtherChilds', { name }).then(() => {
        return dispatch('showChildSelected', { name, parent})
      }).then(() => console.log('tutto ok'))
    },
    




    // BACKUP

    showChildSelectedBAK: ({ commit, getters }, { name, parent }) => {
      return new Promise((resolve, reject) => {
        let selectedParent = getters.getParentSelected(name, parent)
        commit('SELECT_MENU', selectedParent)
        console.log('***** ACTIONS1')
        resolve()
      })
    },
    hideOtherChildsBAK: ({ commit, getters }, { name }) => {
      return new Promise((resolve, reject) => {
        let otherParents = getters.getNonSelectedParents(name)
        commit('HIDE_OTHER_MENUS', otherParents)
        console.log('***** ACTIONS2'. otherParents)
        resolve()   
      })
    },
    async toggleParentChildBAK ({ dispatch }, { name, parent }) {
      await dispatch('showChildSelected', { name, parent })
      await dispatch('hideOtherChilds', { name })
    },
    login() {}
  }
})
