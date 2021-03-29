const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifest = require('webpack-pwa-manifest')
const { InjectManifest } = require('workbox-webpack-plugin')
const ImageminWebpackPlugin = require('imagemin-webpack-plugin').default
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const ImageminMozjpeg = require('imagemin-mozjpeg')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
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
          to: path.resolve(__dirname, 'dist/'),
          globOptions: {
            ignore: ['**/images/heros'], // CopyWebpackPlugin mengabaikan berkas yang berada di dalam folder images
          },
        },
      ]
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new WebpackPwaManifest({
      name: 'Hunger App',
      short_name: 'Hunger',
      description: 'Hunger App find yout match restaurant',
      background_color: '#f3f3f3',
      theme_color: '#654062',
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
    }),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new BundleAnalyzerPlugin(),  
  ],
   optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
    ],
  },
}
