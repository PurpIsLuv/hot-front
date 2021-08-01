export default {
  fetchCategories({ commit }, payload) {
    return this.$http({
      url: '/api/category/list',
      method: 'post'
    })
      .then((response) => {
        if (response.data.success) {
          commit('SET_CATEGORIES', response.data.result)
          return response.data.result
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  }
}