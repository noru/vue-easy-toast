var webpack = require('webpack');

module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./dist",
    publicPath: "/dist/",
    filename: "vue-easy-toast.js",
    library: ["vue-easy-toast"],
    libraryTarget: "umd"
  },
  module: {
    loaders: [
      { test: /\.vue$/, loader: "vue" },
      {
        test: /\.js$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'stage-2']
        }
      }
    ]
  }
}

if (process.env.NODE_ENV === 'production') {
  module.exports.output.filename = "vue-easy-toast.min.js",
  module.exports.plugins = [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    })
  ];
} else {
  module.exports.devtool = '#source-map'
}
