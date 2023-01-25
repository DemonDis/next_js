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
          name: 'story',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
            host_next: `host_next@${process.env.NODE_ENV === 'development' ? 'https://9001-demondis-nextjs-ag8mieut0c1.ws-eu84.gitpod.io' : '/host_next'}/remoteEntry.js`,
          },
          exposes:{},
          shared: {}
        }),
      );
    }

    return config;
  },
};
