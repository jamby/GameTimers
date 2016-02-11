var webpack = require('webpack');
module.exports = {
  entry: {
  app: ['webpack/hot/dev-server', './javascripts/entry.js'],
},
output: {
  path: './public/built',
  filename: 'bundle.js',
  publicPath: 'http://localhost:8080/built/'
},
devServer: {
  contentBase: './public',
  publicPath: 'http://localhost:8080/built/'
},
module: {
 loaders: [
   { test: /\.js$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react', 'es2015'] } },
   { test: /\.jsx$/, loader: 'babel', exclude: /node_modules/, query: { presets: ['react', 'es2015'] } },
   { test: /\.css$/, loader: 'style-loader!css-loader' },
   { test: /\.sass$/, loader: 'style-loader!css-loader!sass-loader'}
 ]
},
 plugins: [
   new webpack.HotModuleReplacementPlugin()
 ]
}