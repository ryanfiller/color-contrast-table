<script>
import Vue from 'vue';
import Chart from '../src/index.js';

export default Vue.extend({
  name: 'ServeDev',
  components: {
    Chart
  },
    data() {
      return {
        colors: [
          {name: 'NAVY', value: '#001f3f'},
          {name: 'BLUE', value: '#0074D9'},
          {name: 'AQUA', value: '#7FDBFF'},
          {name: 'TEAL', value: '#39CCCC'},
          {name: 'OLIVE', value: '#3D9970'},
          {name: 'GREEN', value: '#2ECC40'},
          {name: 'LIME', value: '#01FF70'},
          {name: 'YELLOW', value: '#FFDC00'},
          {name: 'ORANGE', value: '#FF851B'},
          {name: 'RED', value: '#FF4136'},
          {name: 'MAROON', value: '#85144b'},
          {name: 'FUCHSIA', value: '#F012BE'},
          {name: 'PURPLE', value: '#B10DC9'},
          {name: 'BLACK', value: '#111111'},
          {name: 'GRAY', value: '#AAAAAA'},
          {name: 'SILVER', value: '#DDDDDD'}
        ]
      }
    },
});
</script>

<style>
  body {
    font-family: sans-serif;
    margin: 0;
    padding: 0;
  }
</style>

<template>
  <Chart
    useStyles
    :colors="colors"
    editNames
    editValues
    :onInputBlur="test"
  />
    <!-- :onValuesChange="test"
    :onNamesChange="test" -->
</template>

