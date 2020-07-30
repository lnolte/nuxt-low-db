module.exports = {
  modules: [
    '@nuxtjs/axios',
    'modules/json-server',
  ],
  axios: {
    baseURL: 'http://localhost:8080',
  },
}
