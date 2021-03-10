const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',

  configureWebpack: {
    plugins: [
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      })
    ]
  },

  chainWebpack: config => {
    config.module
      .rule('html')
      .test(/\.content\.html$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'content/[name].[hash:8].[ext]'
      })
  },

  pwa: {
    name: '@fewwwww',
    themeColor: '#073642',
    msTileColor: '#073642',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    iconPaths: {
      favicon32: 'favicon/favicon-32x32.png',
      favicon16: 'favicon/favicon-16x16.png',
      appleTouchIcon: 'favicon/apple-touch-icon-180x180.png',
      maskIcon: 'favicon/favicon-16x16.png',
      msTileImage: 'favicon/mstile-144x144.png'
    },
    manifestOptions: {
      short_name: '@fewwwww',
      name: '@fewwwww',
      description: 'Software engineer & other things',
      display: 'standalone',
      themeColor: '#073642',
      background_color: '#073642',
      icons: [192, 512].map(size => [true, false].map(isMaskable => {
        let suffix = ''
        let purpose = 'any'
        if (isMaskable) {
          suffix = '-maskable'
          purpose = 'maskable'
        }
        return {
          src: `favicon/android-chrome${suffix}-${size}x${size}.png`,
          type: 'image/png',
          sizes: `${size}x${size}`,
          purpose: purpose
        }
      })).flat(),
      shortcuts: ['Portfolio', 'About', 'Contact'].map(link => ({
        name: link,
        url: `/#/${link.toLocaleLowerCase()}`
      }))
    }
  }
}
