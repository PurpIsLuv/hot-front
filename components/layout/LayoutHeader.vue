<template>
  <header class="layout-header">
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      color="#121212"
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
      color="#121212"
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
        <span>.space</span>
      </nuxt-link>
      <!-- <v-row
        v-if="$vuetify.breakpoint.smAndUp"
        justify="center"
      >
        <v-flex
          sm8
          md6
          lg4
          xl3
        >
          <v-text-field
            v-model="search"
            class="elevation-0"
            label="Search"
            solo-inverted
            append-icon="mdi-magnify"
            color="#ff6060"
            hide-details
            @keyup.enter="routeToSearchPage"
            @click:append="routeToSearchPage"
          ></v-text-field>
        </v-flex>
      </v-row> -->
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
          title: 'Main',
          to: '/'
        },
        {
          icon: 'mdi-view-list',
          title: 'Categories',
          to: '/category'
        },
        {
          icon: 'mdi-star',
          title: 'Pornstars',
          to: '/star'
        },
        {
          icon: 'mdi-text-box-outline',
          title: 'Abuse',
          to: '/abuse'
        },
        {
          icon: 'mdi-handshake-outline',
          title: 'Help',
          to: '/help'
        }
      ],
      search: ''
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
    routeToSearchPage() {
      if (this.search) {
        const value = this.search
        this.search = ''
        this.$router.push({ name: 'search', query: { value } })
      }
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
      color: #fff;
    }
  }
  &:hover {
    span {
      &:nth-child(1) {
        transition: 0.3s linear;
        color: #fff;
      }
      &:nth-child(2) {
        transition: 0.3s linear;
        color: #ff6060;
      }
    }
  }
}
</style>
