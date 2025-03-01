const esbuild = require('esbuild');
const { nodeExternalsPlugin } = require('esbuild-node-externals');

esbuild.build({
  entryPoints: ['./src/server.ts'],
  bundle: true,
  platform: 'node',
  target: 'node18',
  outfile: 'dist/server.js',
  plugins: [nodeExternalsPlugin({
    allowList: ['@sahil/lib', 'ui', '@sahil/configs', '@sahil/features']
  })],
  format: 'cjs',
}).catch(() => process.exit(1));
