<template>
  <!-- Секция видео -->
  <section v-if="videos && videos.length">
    <h4 class="text-h4 mx-2">New porno</h4>
    <v-row wrap class="my-2 mx-0">
      <v-flex
        v-for="(video) in videos"
        :key="video.id"
        xs12
        sm6
        lg4
        xl3
        px-2
        py-4
      >
        <prn-preview
          :item="video"
        ></prn-preview>
      </v-flex>
    </v-row>
    <v-pagination
      v-if="Number.isInteger(length)"
      v-model="page"
      class="my-4"
      color="#ff6060"
      :length="length"
    ></v-pagination>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  props: {
    itemCount: {
      type: Number,
      default: 9
    }
  },
  data() {
    return {
      page: 1,
    }
  },
  computed: {
    ...mapState({
      videos: state => state.video.videos,
      videosLength: state => state.video.length
    }),
    length() {
      return Math.ceil(this.videosLength / this.itemCount)
    }
  },
  watch: {
    page(v) {
      this.$store.dispatch('video/fetchVideos', {
        itemCount: this.itemCount,
        pageCount: v - 1
      })
    }
  }
}
</script>
