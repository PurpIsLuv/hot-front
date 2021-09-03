export default {
  fetchVideos({ commit }, payload) {
    return this.$http({
      url: '/api/video/list',
      method: 'post',
      data: payload
    })
      .then((response) => {
        if (response.data.success) {
          console.log(response.data)
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
  },
  updateVideo(ctx, payload) {
    return this.$http({
      method: 'put',
      url: 'api/video',
      data: payload
    })
  },
  createVideo(ctx, payload) {
    return this.$http({
      method: 'post',
      url: 'api/video',
      data: payload
    })
  },
  deleteVideo(ctx, id) {
    console.log(id)
    return this.$http({
      method: 'delete',
      url: 'api/video',
      data: { id }
    })
  }
}
