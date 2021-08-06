import Actions from './category/actions'
import Mutations from './category/mutations'

export const state = () => ({
  categories: [],
  length: 0,
  category: {}
})

export const actions = Actions
export const mutations = Mutations