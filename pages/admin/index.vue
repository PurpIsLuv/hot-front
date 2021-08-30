<template>
  <div>
    admin page
  </div>
</template>

<script>
import { ADMIN_SUCCESS_SESSION } from '~/utils/const'

export default {
  mounted() {
    // Логика ввода пароля для админки
    if (!localStorage.getItem(ADMIN_SUCCESS_SESSION)) {
      const password = prompt('Password')
      if (password === process.env.ADMIN_PASSWORD) {
        localStorage.setItem(ADMIN_SUCCESS_SESSION, true)

        this.$store.commit('menu/SET_ADMIN_MENU')
      } else {
        this.$router.push('/')
      }
    }
  }
}
</script>
