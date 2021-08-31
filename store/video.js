import Actions from './video/actions'
import Mutations from './video/mutations'

export const state = () => ({
  videos: [],
  length: 0,
  video: {
    VideoPhotos: [],
    VideoFiles: []
  }
})

export const actions = Actions
export const mutations = Mutations