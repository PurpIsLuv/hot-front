<template>
  <section class="page--star">
    <h4 class="text-h4 mx-2">Video with {{ star.name }}</h4>
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
      v-if="Number.isInteger(getVideosLength)"
      v-model="videoPage"
      class="my-4"
      color="#ff6060"
      :length="getVideosLength"
    ></v-pagination>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'StarId',
  data() {
    return {
      videoPage: 1
    }
  },
  fetch({ store, route }) {
    const promises = [
      store.dispatch('star/fetchStar', route.params.id),
      store.dispatch('video/fetchVideos', {
        starId: route.params.id,
        itemCount: 30,
        pageCount: 0
      })
    ]
    return Promise.all(promises)
  },
  head() {
    return {
      title: 'Pornstar ' + this.star.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.star.description || this.star.name || ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: this.star.name || ''
        }
      ]
    }
  },
  computed: {
    ...mapState({
      star: state => state.star.star,
      videos: state => state.video.videos
    }),
    getVideosLength() {
      return Math.ceil(this.videoLength / 30)
    }
  },
  watch: {
    categoryPage(v) {
      this.$store.dispatch('category/fetchCategories', {
        itemCount: 30,
        pageCount: v - 1
      })
    }
  }
}
</script>
