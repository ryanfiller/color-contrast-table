import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
    
const pkg = require('./package.json')
    
export default {
  input: './index.js',
  output: [
    { 
      file: pkg.main,
      format: 'cjs',
    },
    { 
      file: pkg.module,
      format: 'es',
    }
  ],
  plugins: [
    resolve(),
    commonjs()
  ],
}