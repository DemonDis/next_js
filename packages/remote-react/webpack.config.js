const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = (env, arg) => ({
  module: arg.mode === 'production' ? 'production' : 'development',
  devtool: arg.mode === 'production' ? 'source-map' : 'eval',
  entry: './src/index',

  output: {
    // publicPath: env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:4001/' : '/remote_app_2/',
    publicPath: 'auto',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  devServer: {
    port: 4001,
    // historyApiFallback: true,
    // headers: {'Access-Control-Allow-Origin': '*'}
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: 'javascript/auto',
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ['style-loader', 'css-loader', 'postcss-loader', "sass-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'remote_app_2',
      library: { type: 'var', name: 'remote_app_2' },
      filename: 'remote.js',
      exposes: {
        './Button': './src/components/Button/index.jsx',
      },
      shared: {
        ...deps,
        react: {
          // singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          // singleton: true,
          requiredVersion: deps['react-dom'],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
});
