export default {
  SET_CATEGORIES(state, data) {
    state.categories = data
  },
  SET_LENGTH(state, length) {
    state.length = length
  },
  SET_CATEGORY(state, data) {
    state.category = data
  },
  ADD_CATEGORIES(state, data) {
    state.categories = [...state.categories, ...data]
  }
}