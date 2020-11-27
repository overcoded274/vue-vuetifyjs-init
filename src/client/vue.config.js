module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `@import "~@/sass/index.scss"`, 
      }
    }
  },
  // single file components (sfc) lang="sass" support
  // chainWebpack: config => {
  //   ["vue-modules", "vue", "normal-modules", "normal"].forEach((match) => {
  //     config.module.rule('sass').oneOf(match).use('sass-loader')
  //       .tap(opt => Object.assign(opt, { data: `@import '~@/sass/index.sass'` }))
  //   })
  // }
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'Overcoded'
    }
  },
  "transpileDependencies": [
    "vuetify"
  ]
}