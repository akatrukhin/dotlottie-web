/**
 * Copyright 2022 Design Barn Inc.
 */

const { defineConfig } = require('tsup');

module.exports = defineConfig({
  bundle: true,
  metafile: false,
  splitting: false,
  treeshake: true,
  clean: true,
  dts: true,
  minify: false,
  sourcemap: false,
  entry: ['./src/**/*.ts'],
  format: ['esm'],
  platform: 'browser',
  target: ['es2020', 'node16'],
  tsconfig: 'tsconfig.build.json',
});
