<template>
  <section class="page--index">
    <video-section
      :item-count="videoCount"
    ></video-section>
    <category-section
      :item-count="categoryCount"
    ></category-section>
    <star-section
      :item-count="starCount"
    ></star-section>
  </section>
</template>

<script>
import VideoSection from '~/components/common/VideoSection'
import StarSection from '~/components/common/StarSection'
import CategorySection from '~/components/common/CategorySection'

export default {
  components: {
    VideoSection,
    StarSection,
    CategorySection
  },
  data() {
    return {
      videoCount: 12,
      categoryCount: 12,
      starCount: 12
    }
  },
  fetch({ store }) {
    const promises = [
      store.dispatch('category/fetchCategories', {
        itemCount: 12,
        pageCount: 0
      }),
      store.dispatch('star/fetchStars', {
        itemCount: 12,
        pageCount: 0
      }),
      store.dispatch('video/fetchVideos', {
        itemCount: 12,
        pageCount: 0
      })
    ]
    return Promise.all(promises)
  }
}
</script>

<style lang="scss" scoped></style>
