import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
    
const pkg = require('./package.json')
    
export default {
  input: './index.js',
  output: [
    { 
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    { 
      file: pkg.module,
      format: 'es',
      exports: 'named'
    },
  ],
  plugins: [
    resolve(),
    commonjs({include: ['node_modules/**', 'index.js']})
  ],
}