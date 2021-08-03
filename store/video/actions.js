export default {
  fetchVideos({ commit }, payload) {
    return this.$http({
      url: '/api/video/list',
      method: 'post',
      data: payload
    })
      .then((response) => {
        
      })
  }
}
