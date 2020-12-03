import commonjs from '@rollup/plugin-commonjs';
import buble from '@rollup/plugin-buble';
import {terser} from 'rollup-plugin-terser';

import pkg from './package.json';

export default [
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
        format: 'cjs'
      },
      {
        file: pkg.min,
        format: 'cjs',
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
