export default {
  SET_VIDEOS(state, videos) {
    state.videos = videos
  },
  SET_LENGTH(state, length) {
    state.length = length
  },
  SET_VIDEO(state, video) {
    state.video = video
  },
  ADD_IMAGE(state, image) {
    state.video.VideoPhotos.push(image)
  },
  DELETE_IMAGE(state, index) {
    state.video.VideoPhotos.splice(index, 1)
  },
  DELETE_VIDEO_URL(state, index) {
    state.video.VideoFiles.splice(index, 1)
  },
  ADD_VIDEO(state) {
    state.video.VideoFiles.push({
      resolution: '',
      url: ''
    })
  },
  SET_VIDEO_URL(state, { index, value }) {
    state.video.VideoFiles[index].url = value
  },
  SET_VIDEO_RESOLUTION(state, { index, value }) {
    state.video.VideoFiles[index].resolution = value
  }
}
