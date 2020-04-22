import axios from 'axios'

import {
  userAPI
} from '@/api'

/**
 * @const state
 * @type {object}
 */
const state = {
  user: {}
}

/**
 * @const actions
 * @type {object}
 */
const actions = {
  getUser: async (context, payload) => {
    try {
      var resp = await axios.get(userAPI.getUser, payload)
      context.commit('setUser', resp.data)
    } catch (error) {
      context.commit('setUser', null)
    }
  }
}

/**
 * @const mutations
 * @type {object}
 */
const mutations = {
  setUser: (state, data) => {
    state.user = data
  }
}

export default {state, actions, mutations}
