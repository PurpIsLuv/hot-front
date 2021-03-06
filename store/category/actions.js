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
          return response.data
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  },
  fetchCategory({ commit }, slug) {
    return this.$http({
      url: 'api/category',
      method: 'get',
      params: { slug }
    })
      .then((response) => {
        if (response.data) {
          commit('SET_CATEGORY', response.data)
          return response
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  },
  updateStat(ctx, ids) {
    return this.$http({
      url: 'api/category/stat',
      method: 'post',
      data: { ids }
    })
  }
}