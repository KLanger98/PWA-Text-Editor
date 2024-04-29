const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

// TODO: Add and configure workbox plugins for a service worker and manifest file.
// TODO: Add CSS loaders and babel to webpack.

module.exports = () => {
  return {
    mode: 'development',
    entry: {
      main: './src/js/index.js',
      install: './src/js/install.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: './'
    },
    plugins: [
      new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
      }),
      new InjectManifest({
      swSrc: './src/sw.js',
      swDest: 'service-worker.js',
      }),
      new WebpackPwaManifest(
        // TODO: Create a manifest.json:
        {
        "short_name": "JATE",
        "name": "Just Another Text Editor",
        "icons": [
          {
            "src": path.resolve('./src/images/logo.png'),
            "type": "image/png",
            "sizes": [36, 48, 72, 96, 144, 192, 512],
            "destination": path.join('assets', 'icons')
          }
        ],
        "orientation": "portrait",
        "display": "standalone",
        "start_url": ".",
        "description": "Take notes with Javascript syntax highlighting!",
        "background_color": "#225ca3",
        "theme_color": "#225ca3"
      }),
    ],  

    module: {
      rules: [
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|jpg|jpeg|gif)$/i,
          type: 'asset/resource',
        },
        {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      ],
    },
  };
};
