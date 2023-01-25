const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')
const path = require('path');

module.exports = (phase, { defaultConfig }) => ({ 
  // distDir: 'host_next',
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
              // remote_react:  `remote_react@${phase === PHASE_DEVELOPMENT_SERVER ? 'http://localhost:4001' : '/remote_react'}/remote.js`,
          // import components CodeSpace GitHUB
              // remote_react: `remote_react@https://demondis-organic-eureka-rp5vxwx54g7cvgr-4001.preview.app.github.dev/remote.js`,
              // remote_react:  `remote_react@${phase === PHASE_DEVELOPMENT_SERVER ? 'https://demondis-organic-eureka-rp5vxwx54g7cvgr-4001.preview.app.github.dev' : '/remote_react'}/remote.js`,
          // import components gitpod.io
              remote_react:  `remote_react@${phase === PHASE_DEVELOPMENT_SERVER ? 'https://4001-demondis-nextjs-ag8mieut0c1.ws-eu84.gitpod.io/' : '/remote_react'}/remote.js`,
          },
          exposes:{
            './Button': './components/Button.jsx',
          },
          shared: {}
        }),
      );
    }

    return config;
  },
});
