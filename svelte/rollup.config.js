import svelte from 'rollup-plugin-svelte'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
    
const pkg = require('./package.json')
    
export default {
  input: 'src/index.js',
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
    svelte(),
    resolve(),
    commonjs()
  ],
}