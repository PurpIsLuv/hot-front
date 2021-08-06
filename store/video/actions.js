export default {
  fetchVideos({ commit }, payload) {
    return this.$http({
      url: '/api/video/list',
      method: 'post',
      data: payload
    })
      .then((response) => {
        if (response.data.success) {
          commit('SET_VIDEOS', response.data.result.rows)
          commit('SET_LENGTH', response.data.result.count)
          return response
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  },
  fetchVideo({ commit }, id) {
    return this.$http({
      url: '/api/video',
      method: 'get',
      params: { id }
    })
      .then((response) => {
        if (response.data) {
          commit('SET_VIDEO', response.data)
          return response
        }
        throw response
      })
      .catch((err) => {
        return err
      })
  }
}
