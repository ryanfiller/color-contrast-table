<script>
  export default {
    name: 'EditValue',
    props: {
      value: String,
      index: Number
    }
  }
</script>

<template>
  <label class='color-contrast-table__header-label color-contrast-table__header-label--edit-value'>
    <span>
      {{ value }}
    </span>
    <input
      type='color'
      :title="`${value} color`"
      :value="value"
      @input="$emit('valuechange', index, $event.target.value)"
      @blur="$emit('inputblur', $event)"
    />
  </label>
</template>
