<script>  
  import Row from './row.vue'

  export default {
    name: 'Table',
    components: {
      Row
    },
    props: {
      colors: Array,
      useStyles: Boolean
    },
    methods: {
      namechange(index, value) { this.$emit('namechange', index, value) },
      valuechange(index, value) { this.$emit('valuechange', index, value) },
      inputblur(event) { this.$emit('inputblur', event) }
    }
  }

</script>

<template>
  <table
    class='color-contrast-table'
    v-bind:class="{ 'use-styles': useStyles }"
  >
    <tbody>
      <Row
        v-for="(color, index) in colors"
        :key="index"
        :index="index"
        :color="color"
        v-bind="$attrs"
        @namechange="namechange"
        @valuechange="valuechange"
        @inputblur="inputblur"
      />
    </tbody>
  </table>
</template>