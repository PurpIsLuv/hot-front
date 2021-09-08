<template>
  <!-- Секция категорий -->
  <section
    v-if="categories && categories.length"
    ref="categorySection"
  >
    <h4 class="text-h4 mx-2">
      <nuxt-link to="/category">
        Categories
      </nuxt-link>
    </h4>
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
            :src="$getImage(category.src)"
            :alt="category.name"
            :lazy-src="$getImage(category.src)"
          >
            <v-card-title class="text--shadow">{{ category.name }}</v-card-title>
          </v-img>
        </v-card>
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
      page: 1
    }
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories,
      categoriesLength: state => state.category.length,
    }),
    length() {
      return Math.ceil(this.categoriesLength / this.itemCount)
    }
  },
  watch: {
    page(v) {
      this.$store.dispatch('category/fetchCategories', {
        itemCount: this.itemCount,
        pageCount: v - 1
      })
        .then(() => {
          this.$refs.categorySection.scrollIntoView({
            behavior: 'smooth',
            inline: 'nearest'
          })
        })
    }
  }
}
</script>
