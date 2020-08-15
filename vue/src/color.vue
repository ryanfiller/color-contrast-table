<script>  
  import getLabelColor from './get-label-color'

  export default {
    name: 'Color',
    props: {
      color: Object
    },
    methods: {
      getLabelColor
    }
  }
</script>

<template>
  <td class='color-contrast-table__color'>
    <div
      :title="`${color.ratio} : 1`"
      :class="color.score !== 'fail' ? 'color-contrast-table__color-block' : 'color-contrast-table__color-block color-contrast-table__color-block--fail'"
      :style="{ 
        'background': color.value,
        'color': getLabelColor(color.value)
      }"
    >
      <span class='color-contrast-table__color-score'>
        {{ this.color.score !== 'fail' ? this.color.score : 'X' }}
      </span>
    </div>
  </td>
</template>
