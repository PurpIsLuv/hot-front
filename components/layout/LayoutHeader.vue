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
        class="layout-header__logo text--raleway d-flex"
        :to="{ name: 'index' }"
      >
        <span>Sexus</span>
        <span>.porn</span>
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
  }
}
</script>

<style lang="scss">
.layout-header__logo {
  font-size: 30px;
  cursor: pointer;
  span {
    &:nth-child(1) {
      transition: 0.3s linear;
      color: #ff6060;
    }
    &:nth-child(2) {
      transition: 0.3s linear;
      color: #000;
    }
  }
  &:hover {
    span {
      &:nth-child(1) {
        transition: 0.3s linear;
        color: #000;
      }
      &:nth-child(2) {
        transition: 0.3s linear;
        color: #ff6060;
      }
    }
  }
}
</style>
