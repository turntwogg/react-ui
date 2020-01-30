import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from 'rollup-plugin-babel';

const extensions = ['.js', '.jsx', '.ts', '.tsx'];

export default {
  input: './src/index.ts',
  output: [
    {
      file: './dist/index.js',
      format: 'cjs',
    },
    {
      file: './dist/index.esm.js',
      format: 'es',
    },
  ],
  plugins: [
    resolve({ extensions }),
    commonjs(),
    babel({ extensions, exclude: 'node_modules/**' }),
  ],
  external: id => /^react|styled-jsx|classnames/.test(id),
};
