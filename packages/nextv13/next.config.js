// module.exports = {
//   reactStrictMode: true,
//   serverRuntimeConfig: {
//     mySecret: 'secret'
//   },
//   publicRuntimeConfig: {
//     message: 'notice how serverRuntimeConfig is empty'
//   }
// }

const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const path = require('path');

module.exports = { 
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'styory',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {},
          exposes:{},
          shared: {}
        }),
      );
    }

    return config;
  },
};
