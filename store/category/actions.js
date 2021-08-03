export default {
  fetchCategories({ commit }, payload) {
    return this.$http({
      url: '/api/category/list',
      method: 'post',
      data: payload || undefined
    })
      .then((response) => {
        if (response.data.success) {
          commit('SET_CATEGORIES', response.data.resultCategory)
          commit('SET_LENGTH', response.data.count)
          return response.data.result
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  }
}