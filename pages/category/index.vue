<template>
  <section class="page--category">
    <v-row wrap>
      <v-flex
        v-for="n in 10"
        :key="n"
        xs12
        sm6
        lg4
        xl3
        pa-2
      >
        <v-card
          class="mx-auto"
          max-width="400"
          :to="{ name: 'category-id', params: { id: n } }"
        >
          <v-img
            class="white--text align-end"
            height="200px"
            src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
          >
            <v-card-title>Название категории</v-card-title>
          </v-img>
      
          <v-card-subtitle class="pb-0">Number 10</v-card-subtitle>
      
          <v-card-text class="text--primary">
            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quo iste placeat magni atque ipsa earum blanditiis, fugit quas quod?</div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-row>
  </section>
</template>

<script>
export default {
  name: 'Category'
}
</script>
