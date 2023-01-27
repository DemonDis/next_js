const { withStorybookModuleFederation } = require('storybook-module-federation');

module.exports = withStorybookModuleFederation({
  name: 'host',
  filename: 'remoteEntry.js',
  remotes: {
    // host_next: `host_next@${process.env.NODE_ENV === 'development' ? 'http://localhost:9001' : '/host_next'}/remoteEntry.js`,
// import components gitpod.io
    host_next: `host_next@${process.env.NODE_ENV === 'development' ? 'https://9001-demondis-nextjs-ag8mieut0c1.ws-eu84.gitpod.io' : '/host_next'}/remoteEntry.js`,
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: false,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: false,
    },
  },
})({
  stories: [
    '../stories/**/*.stories.mdx', 
    '../stories/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next'
  ],
  framework: '@storybook/react',
  core: {
    builder: 'webpack5',
    disableTelemetry: true, // 👈 Disables telemetry
    enableCrashReports: false, // 👈 Disables the crash reports to the telemetry events
  },
})