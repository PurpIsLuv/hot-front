export default {
  fetchStars({ commit }, payload) {
    return this.$http({
      url: '/api/star/list',
      method: 'post',
      data: payload || undefined
    })
      .then((response) => {
        if (response.data.success) {
          commit('SET_STARS', response.data.resultStar.rows)
          commit('SET_LENGTH', response.data.resultStar.count)
          return response.data
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  }
}