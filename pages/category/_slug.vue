<template>
  <div class="page--category">
    <h4 class="text-h4 mx-2">New porno: {{ category.name }}</h4>
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
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  data() {
    return {
      videoPage: 1
    }
  },
  fetch({ store, route }) {
    return store.dispatch('category/fetchCategory', route.params.slug)
      .then((respose) => {
        const categoryId = respose.data.id
        return store.dispatch('video/fetchVideos', {
          categoryId,
          itemCount: 30,
          pageCount: 0
        })
      })
  },
  head() {
    return {
      title: 'Category ' + this.category.name,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.category.description || this.category.name || ''
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [this.category.name || undefined, 'porno category', 'porno']
        }
      ]
    }
  },
  computed: {
    ...mapState({
      category: state => state.category.category,
      videos: state => state.video.videos,
      videoLength: state => state.video.length
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
  },
  mounted() {
    this.$store.dispatch('category/updateStat', [this.category.id])
  }
}
</script>
