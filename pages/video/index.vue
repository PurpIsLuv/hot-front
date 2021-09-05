<template>
  <video-section></video-section>
</template>

<script>
import VideoSection from '~/components/common/VideoSection'

export default {
  components: {
    VideoSection
  },
  fetch({ store }) {
    const promises = [
      store.dispatch('video/fetchVideos', {
        itemCount: 12,
        pageCount: 0
      })
    ]
    return Promise.all(promises)
  }
}
</script>
