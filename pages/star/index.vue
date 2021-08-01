<template>
  <section class="page--star">
    <v-row wrap>
      <v-flex
        v-for="n in 12"
        :key="n"
        xs12
        sm6
        lg2
        xl3
        pa-2
      >
        <v-card
          class="mx-auto"
          width="175"
          height="260"
          :to="{ name: 'star-id', query: { id: n } }"
        >
          <v-img
            class="white--text align-end"
            width="175"
            height="260"
            src="https://krasivosti.pro/uploads/posts/2021-04/1617953264_22-p-koshki-malenkie-milie-24.jpg"
            alt="Tifany Tattum"
          >
            <v-card-title>Tifany Tattum</v-card-title>
          </v-img>
        </v-card>
      </v-flex>
    </v-row>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Category',
  fetch({ store }) {
    return store.dispatch('category/fetchCategories')
  },
  computed: {
    ...mapState({
      categories: state => state.category.categories
    })
  }
}
</script>
