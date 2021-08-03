export default ({ app }, inject) => {
  inject('http', ({ url, params, data, method, contentType, ...options }) => {
    return app.$axios({
      method,
      url,
      params,
      data,
      // headers,
      contentType,
      ...options
    })
  })
}
