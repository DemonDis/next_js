const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'host',
          remotes: {
              // remote: `remote@http://localhost:3001/remote.js`,
              remote: `remote@https://demondis-automatic-halibut-xvgq4x4g96whv946-3001.preview.app.github.dev/remote.js`,
              // remote_app_2: `remote_app_2@http://localhost:4001/remote.js`,
              remote_app_2: `remote_app_2@https://demondis-automatic-halibut-xvgq4x4g96whv946-4001.preview.app.github.dev/remote.js`,
          },
          filename: 'static/chunks/remoteEntry.js',
        }),
      );
    }

    return config;
  },
};
