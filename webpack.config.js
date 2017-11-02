const webpack = require('webpack');
const path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const script = process.env.npm_lifecycle_event;
const isTest = script === 'test' || script === 'test-watch';
const isProd = script === 'build';
const isDev = !isTest && !isProd;

const include = [
    path.resolve(__dirname, 'src')
];

module.exports = function() {
  let config = {};

  config.entry = path.resolve(__dirname, 'src', 'index.js');
  config.output = {
    path: path.resolve(__dirname, isProd ? 'dist' : 'src'),
    filename: '[name].[chunkhash].js',
    publicPath: '/'
  };

  if (isProd) {
    config.devtool = 'source-map';
  }

  // vue.js npm package is runtime-only - use the dist version to get the compiler
  config.resolve = {
    extensions: ['.js', '.scss', '.html'],
    alias: {
      vue: isProd ? 'vue/dist/vue.min.js' : 'vue/dist/vue.js'
    }
  };

  config.cache = true;

  config.module = {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include
      },
      {
        test: /.scss$/,
        loader: 'style-loader!css-loader!postcss-loader!sass-loader',
        include
      },
      {
        test: /.html$/,
        loader: 'raw-loader?html-minify-loader',
        include
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader',
        options: {
          removeTags: true,
          removingTags: ['style']
        },
        include
      }
    ]
  };


  config.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: isProd ? '"production"' : '"development"',
        IS_DEV: !isProd,
        IS_PROD: isProd
      }
    })
  ];

  if (!isTest) {
    config.plugins.push(
        new HtmlWebpackPlugin({
          template: 'src/index.ejs',
          isDev,
          isProd
        })
    );
  }

  if (isProd) {
    config.plugins.push(
        new UglifyJSPlugin()
    );
  }

  config.devServer = {
    contentBase: './src',
    historyApiFallback: {
      index: 'src/index.html'
    },
    port: 8080
  };

  return config;
}();