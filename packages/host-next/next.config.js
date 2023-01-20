const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host_next',
          remotes: {
              // remote_react: `remote_react@http://localhost:4001/remote.js`,
              remote_react: `remote_react@https://demondis-automatic-halibut-xvgq4x4g96whv946-4001.preview.app.github.dev/remote.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};
