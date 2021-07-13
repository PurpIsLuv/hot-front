<template>
  <v-app dark>
    <layout-header></layout-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <layout-footer></layout-footer>
  </v-app>
</template>

<script>
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'

export default {
  components: { LayoutFooter, LayoutHeader }
}
</script>
