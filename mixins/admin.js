export default {
  mounted() {
    // Логика ввода пароля для админки
    if (!localStorage.getItem('admin')) {
      const password = prompt('Password')
      if (password === process.env.ADMIN_PASSWORD) {
        localStorage.setItem('admin', true)
      } else {
        this.$router.push('/')
      }
    }
  }
}