export default ({ app }, inject) => {
  inject('getImage', (src) => {
    return process.env.TARGET_HOST + src
  })
}
