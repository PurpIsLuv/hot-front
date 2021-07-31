<template>
  <header class="layout-header">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#ff6060">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style='color: #ff6060;'>
              {{ item.title }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
      clipped-left
      elevation="1"
    >
      <v-app-bar-nav-icon
        v-if="!isLgAndUp"
        color="#ff6060"
        @click.stop="drawer = !drawer"
      />
      <nuxt-link
        class="text--quicksand text-h4 d-flex"
        :to="{ name: 'index' }"
        @mouseenter="toggleMouseHandler(true)"
        @mouseleave="toggleMouseHandler(false)"
      >
        <h5 :class="[ isLogoEnter ? 'text--black' : 'link--default']">Sexus</h5>
        <h5 :class="[ isLogoEnter ? 'link--default' : 'text--black']">.porn</h5>
      </nuxt-link>
    </v-app-bar>
  </header>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
      isLogoEnter: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Главная',
          to: '/'
        },
        {
          icon: 'mdi-view-list',
          title: 'Категории',
          to: '/category'
        },
        {
          icon: 'mdi-star',
          title: 'Порнозвезды',
          to: '/star'
        }
      ]
    }
  },
  computed: {
    isLgAndUp() {
      return this.$vuetify.breakpoint.lgAndUp
    }
  },
  mounted() {
    if (this.isLgAndUp) {
      this.drawer = true
    }
  },
  methods: {
    toggleMouseHandler(v) {
      this.isLogoEnter = v
    }
  }
}
</script>
