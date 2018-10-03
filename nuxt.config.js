module.exports = {
  build: {
    extend (config, { isDev }) {
      config.node = {
        fs: 'empty'
      }
    }
  }
}