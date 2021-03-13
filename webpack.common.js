const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')
const path = require('path')

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src/templates/index.html'),
      filename: 'index.html'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/')
        }
      ]
    }),
    new WebpackPwaManifest({
      name: 'Hunger App',
      short_name: 'Hunger',
      description: 'Hunger App find yout match restaurant',
      background_color: '#ff9642',
      theme_color: '#ff9642',
      display: 'standalone',
      filename: 'manifest.json',
      start_url: '/index.html',
      crossorigin: null,
      icons: [
        {
          src: path.resolve('src/public/icons/icon-192x192.png'),
          size: [72, 96, 128, 144, 152, 192]
        },
        {
          src: path.resolve('src/public/icons/icon-384x384.png'),
          size: [256, 384],
          purpose: 'any maskable'
        },
        {
          src: path.resolve('src/public/icons/icon-512x512.png'),
          size: '512x512',
          purpose: 'maskable'
        }
      ]
    }),
    new InjectManifest({
      swSrc: path.resolve(__dirname, 'src/scripts/sw.js'),
      maximumFileSizeToCacheInBytes: 10 * 1024 * 1024
    })
  ]

}
