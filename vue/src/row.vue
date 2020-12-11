<script>  
  import Header from './header.vue'
  import Color from './color.vue'

  export default {
    name: 'Row',
    components: {
      Header,
      Color
    },
    props: {
      color: Object,
      index: Number
    },
    methods: {
      namechange(index, value) { this.$emit('namechange', index, value) },
      valuechange(index, value) { this.$emit('valuechange', index, value) },
      inputblur(event) { this.$emit('inputblur', event) }
    }
  }
</script>

<template>
  <tr
    class='color-contrast-table__row'
    data-color="color.name"
    :style="{ 
      'background': color.value,
      'color': color.value
    }"
  >
    <Header
      :color="color"
      :index="index"
      v-bind="$attrs"
      @namechange="namechange"
      @valuechange="valuechange"
      @inputblur="inputblur"
    />

    <Color
      v-for="(color, index) in color.combinationScores"
      :key="index"
      :color="color"
    />
  </tr>
</template>
