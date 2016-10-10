const path = require('path') // path resolution module makes working with relative and absolute paths easier

module.exports = {
  context: __dirname,
  entry: './source/client.jsx', // entry point for JS bundle
  output: {
    path: path.join(__dirname, '/static'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'] // '' = find exact module name, if not find it with .js extension, if not .jsx then finally .json
  },
  stats: {
    colors: true, // easy to spot the outpot of webpacking in terminal window
    reasons: true, // verbose errors messages, good in dev
    chunks: true // not chunking anything now
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  }
}
