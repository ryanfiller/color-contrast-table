// Convert CommonJS modules to ES6
import commonjs from '@rollup/plugin-commonjs'

// Handle .vue SFC files
import vue from 'rollup-plugin-vue'

// Transpile/polyfill with reasonable browser support
import buble from '@rollup/plugin-buble'

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
    commonjs(),
    vue({
        // Explicitly convert template to render function
        compileTemplate: true, 
    }),
    buble(), 
  ],
}
