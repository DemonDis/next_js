const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const deps = require('./package.json').dependencies;

module.exports = (env, arg) => ({
  module: arg.mode === 'production' ? 'production' : 'development',
  devtool: arg.mode === 'production' ? 'source-map' : 'eval',

  output: {
    publicPath: env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:9001/' : '/remote_react/',
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom'
    }
  },

  devServer: {
    port: 9001,
    historyApiFallback: true,
    headers: {'Access-Control-Allow-Origin': '*'}
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
      filename: 'remoteEntry.js',
      remotes: {
        /* Example remotes
          components: `components@${env.hasOwnProperty('WEBPACK_SERVE') ? 'http://localhost:3001' : '/components'}/remoteEntry.js`,
        */
      },
      exposes: {
        /* Example exposes
          './Button': './src/components/Button.jsx',
        */
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
