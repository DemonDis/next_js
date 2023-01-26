const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const path = require('path');
const deps = require('./package.json').dependencies;

module.exports = (env, arg) => ({
  module: arg.mode === 'production' ? 'production' : 'development',
  devtool: arg.mode === 'production' ? 'source-map' : 'eval',
  entry: './src/index',

  output: {
    // publicPath: env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:4001/' : '/remote_react/',
    publicPath: env.hasOwnProperty('WEBPACK_SERVE') ? 'auto' : '/remote_react/',
    // path: path.resolve(__dirname, 'remote_react'),
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: { 'react-dom': '@hot-loader/react-dom'  }
  },

  devServer: {
    port: 4001,
    // For gitpod.io
    host: '0.0.0.0',
    allowedHosts: ['localhost', '.gitpod.io'],
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
      name: 'remote_react',
      // library: { type: 'var', name: 'remote_react' },
      filename: 'remote.js',
      exposes: {
        './ReactComp':   './src/components/index.jsx',
      },
      shared: {
        // ...deps,
        // react: {
        //   singleton: true,
        //   requiredVersion: deps.react,
        // },
        // 'react-dom': {
        //   singleton: true,
        //   requiredVersion: deps['react-dom'],
        // },
        react: {
          singleton: true,
          version: '0',
          requiredVersion: false,
        },
        'react-dom': {
          requiredVersion: false,
          singleton: true,
          version: '0',
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: './public/index.html',
      favicon: './public/favicon.ico',
    }),
  ],
});
