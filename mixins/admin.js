import { ADMIN_SUCCESS_SESSION } from '~/utils/const'

export default {
  mounted() {
    // Логика ввода пароля для админки
    if (!localStorage.getItem(ADMIN_SUCCESS_SESSION)) {
      const password = prompt('Password')
      if (password === process.env.ADMIN_PASSWORD) {
        localStorage.setItem(ADMIN_SUCCESS_SESSION, true)
      } else {
        this.$router.push('/')
      }
    }
  }
}