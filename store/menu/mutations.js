export default {
  SET_ADMIN_MENU(state) {
    state.items = state.items.concat(state.adminItems)
  }
}