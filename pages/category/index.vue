<template>
  <section class="page--category">
    <v-row wrap class="my-2 mx-0">
      <v-flex
        v-for="category in categories"
        :key="category.id"
        xs12
        sm6
        lg4
        xl3
        px-2
        py-4
      >
        <v-card
          class="mx-auto"
          max-width="400"
          :to="{ name: 'category-slug', params: { slug: category.slug } }"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            :src="$getImage(category.src) || 'https://via.placeholder.com/400'"
            :alt="category.name"
          >
            <v-card-title class="text--shadow">{{ category.name }}</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>
    <v-pagination
      v-if="Number.isInteger(getCategoriesLength)"
      v-model="categoryPage"
      class="my-4"
      color="#ff6060"
      :length="getCategoriesLength"
    ></v-pagination>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  data() {
    return {
      categoryPage: 1
    }
  },
  fetch({ store }) {
    return store.dispatch('category/fetchCategories', {
      itemCount: 18,
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
      categories: state => state.category.categories,
      categoriesLength: state => state.category.length
    }),
    getCategoriesLength() {
      return Math.ceil(this.categoriesLength / 18)
    }
  },
  watch: {
    categoryPage(v) {
      this.$store.dispatch('category/fetchCategories', {
        itemCount: 18,
        pageCount: v - 1
      })
    }
  }
}
</script>
