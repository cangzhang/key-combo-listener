import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

const config = [
  {
    input: 'src/index.js',
    output: {
      name: 'KeyComboListener',
      file: pkg.browser,
      format: 'umd',
      compact: true
    },
    plugins: [
      commonjs(),
      buble()
    ]
  },
  {
    input: 'src/index.js',
    plugins: [
      buble()
    ],
    output: [
      {
        file: pkg.main,
        format: 'cjs',
        exports: 'auto'
      },
      {
        file: pkg.min,
        format: 'cjs',
        exports: 'auto',
        plugins: [
          terser()
        ]
      },
      {
        file: pkg.module,
        format: 'es'
      }
    ]
  }
];

export default config;
