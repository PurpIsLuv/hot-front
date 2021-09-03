<template>
  <category-section
    :item-count="24"
  ></category-section>
</template>

<script>
import { mapState } from 'vuex'
import CategorySection from '~/components/common/CategorySection'

export default {
  name: 'Category',
  components: {
    CategorySection
  },
  fetch({ store }) {
    return store.dispatch('category/fetchCategories', {
      itemCount: 24,
      pageCount: 0
    })
  },
  head() {
    return {
      title: 'Categories',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Most popular categories'
        },
        {
          hid: 'keywords',
          name: 'keywords',
          content: [...this.categories.map(v => v.slug), 'categories']
        }
      ]
    }
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  }
}
</script>
