module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://133.186.223.59:8080',
        changeOrigin: true
      }
    }
  }
}