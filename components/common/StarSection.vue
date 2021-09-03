<template>
  <!-- Секция звезд -->
  <section v-if="stars && stars.length">
    <h4 class="text-h4 mx-2 mt-2">Pornstars</h4>
    <v-row wrap class="my-2 mx-0">
      <v-flex
        v-for="star in stars"
        :key="star.id"
        xs6
        sm4
        lg3
        xl2
        pa-2
      >
        <v-card
          class="mx-auto"
          width="175"
          height="260"
          :to="{ name: 'star-id', params: { id: star.id } }"
        >
          <v-img
            class="white--text align-end"
            width="175"
            height="260"
            :src="$getImage(star.src) || 'https://via.placeholder.com/300'"
            :alt="star.name"
          >
            <v-card-title class="text--shadow">{{ star.name }}</v-card-title>
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
      default: 12
    }
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapState({
      stars: state => state.star.stars,
      starsLength: state => state.star.length,
    }),
    length() {
      return Math.ceil(this.starsLength / this.itemCount)
    }
  },
  watch: {
    page(v) {
      this.$store.dispatch('star/fetchStars', {
        itemCount: this.itemCount,
        pageCount: v - 1
      })
    }
  }
}
</script>
