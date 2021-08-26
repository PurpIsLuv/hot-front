<template>
  <v-app>
    <layout-header></layout-header>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <layout-footer></layout-footer>
    <client-only>
      <v-dialog
        v-model="ageSuccess"
        persistent
        max-width="300px"
      >
        <v-card>
          <v-card-title class="text--default">Are you over 18?</v-card-title>
          <v-card-text>For people over 18 years old</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="onAgeSuccess">
              <span class="text--default">Yes</span>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </client-only>
  </v-app>
</template>

<script>
import LayoutFooter from '@/components/layout/LayoutFooter.vue'
import LayoutHeader from '@/components/layout/LayoutHeader.vue'
import { AGE_SUCCESS_SESSION } from '~/utils/const'

export default {
  components: { LayoutFooter, LayoutHeader },
  data() {
    return {
      ageSuccess: false
    }
  },
  mounted() {
    if (!localStorage.getItem(AGE_SUCCESS_SESSION)) {
      this.ageSuccess = true
    }
  },
  methods: {
    onAgeSuccess() {
      this.ageSuccess = false
      localStorage.setItem(AGE_SUCCESS_SESSION, true)
    }
  }
}
</script>
