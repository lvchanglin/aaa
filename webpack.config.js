var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: ['./src/main.js','babel-polyfill'],
  output: {
    path: path.resolve(__dirname, '../hybridApp/dist'),
    publicPath: './dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg|bmp)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'//添加对样式表的处理,内联样式
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
        loader: 'file-loader',
        options: {
          name: 'fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    proxy: {
          '/index.php': {
              target: 'http://m.1c10.cn',
              host: 'm.1c10.cn',
              changeOrigin:true
          },

          '/users/*': {
              target: 'http://10.2.154.171:3000',
              host:"10.2.154.171:3000",
              changeOrigin:true
          },
          '/list.html/*':{
              target: 'http://m.1c10.cn',
              host:"m.1c10.cn",
              changeOrigin:true
          },

          '/api/*':{
              target: 'http://10.2.154.171:3000',
              host:"10.2.154.171:3000",
              changeOrigin:true
          }
    }
  },

  performance: {
    hints: false
  },

  devtool: '#eval-source-map',

  plugins:[
    new webpack.ProvidePlugin({
        axios: 'axios'
          //各个模块都可以使用axios
    })
  ]
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
