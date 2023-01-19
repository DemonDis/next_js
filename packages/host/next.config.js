// const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

// module.exports = {
//   webpack(config, options) {
//     if (!options.isServer) {
//       config.plugins.push(
//         new NextFederationPlugin({
//           name: 'host',
//           remotes: {
//               remote: `remote@http://localhost:3010/remote.js`,
//           },
//           filename: 'static/chunks/remoteEntry.js',
//           exposes: {},
//           shared: {},
//         }),
//       );
//     }

//     return config;
//   },
// };


const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'next2',
        remotes: {
          remote: `remote@http://localhost:3010/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          // next1: `next1@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: { },
        shared: {
          // whatever else
        },
      })
    );

    return config;
  },
};