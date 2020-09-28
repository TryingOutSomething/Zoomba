module.exports = {
  transpileDependencies: ['vuetify'],

  devServer: {
    host: 'localhost',
    hot: true,
    port: 8080,
    // open: 'Chrome',
    disableHostCheck: true
  },

  publicPath: process.env.NODE_ENV === 'production' ? '/Zoomba/' : '/'
}
