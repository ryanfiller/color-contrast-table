<script>  
  import generateChart from 'color-contrast-table'
  import { debounce } from 'throttle-debounce'
  import Table from './table.vue'
  import Styles from './styles.vue'
  import { Fragment } from 'vue-fragment'

  export default {
    name: 'Chart',
    components: {
      Table,
      Styles,
      Fragment
    },
    props: {
      colors: Array,
      useStyles: Boolean,
      editNames: Boolean,
      editValues: Boolean,
      onNamesChange: Function,
      onValuesChange: Function,
      onInputBlur: Function
    },
    methods: {
      generateChart,
      debounce,
      namechange: debounce(50, true, function (index, value) {
        if (this.$props.onNamesChange) {
          this.$props.onNamesChange(index, value)
        } else {
          // guard against array map failing
          if (value === '') { 
            value = `Color ${index + 1}`
          }
          const newColors = [...this.colorArray]
          newColors[index].name = value
          this.colorArray = newColors
        }
      }),
      valuechange: debounce(50, true, function (index, value) {
        if (this.$props.onValuesChange) {
          this.$props.onValuesChange(index, value)
        } else {
          const newColors = [...this.colorArray]
          newColors[index].value = value
          this.colorArray = newColors
        }
      }),
      inputblur(event) {
        if (this.$props.onInputBlur) {
          this.$props.onInputBlur(event)
        }
      }
    },
    data() {
      return {
        showEditNames: !!this.$props.onNamesChange || !!this.$props.editNames,
        showEditValues: !!this.$props.onValuesChange || !!this.$props.editValues,
        colorArray: this.$props.colors
      }
    },
    computed: {
      colorChart: function () {
        return this.generateChart(this.colorArray)
      }
    }
  }
</script>

<template>
  <Fragment>
    <Styles/>
    <Table
      :colors="colorChart"
      :useStyles="useStyles"
      :editNames="showEditNames"
      :editValues="showEditValues"
      @namechange="namechange"
      @valuechange="valuechange"
      @inputblur="inputblur"
    /> 
  </Fragment>
</template>