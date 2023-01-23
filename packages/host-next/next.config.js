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
          name: 'host_next',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
              // remote_react: `remote_react@http://localhost:4001/remote.js`,
              // import components CodeSpace GitHUB
              remote_react: `remote_react@https://demondis-crispy-robot-rp5vxwx5pw43p5q9-4001.preview.app.github.dev/remote.js`,
          },
          exposes:{},
          shared: {}
        }),
      );
    }

    return config;
  },
};
