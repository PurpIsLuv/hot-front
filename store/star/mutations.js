export default {
  SET_STARS(state, data) {
    state.stars = data
  },
  SET_LENGTH(state, length) {
    state.length = length
  },
  SET_STAR(state, data) {
    state.star = data
  },
  ADD_STARS(state, data) {
    state.stars = [...state.stars, ...data]
  }
}