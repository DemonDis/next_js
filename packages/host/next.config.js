const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
              remote: `remote@http://localhost:3010/remote.js`,
          },
          exposes: {},
          shared: {},
        }),
      );
    }

    return config;
  },
};
