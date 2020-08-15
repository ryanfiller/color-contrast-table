<script>
  export default {
    name: 'EditName',
    props: {
      value: String,
      index: Number
    }
  }
</script>

<template>
  <label class='color-contrast-table__header-label color-contrast-table__header-label--edit-name'>
    <span>
      {{ value }}
    </span>
    <input
      type='text'
      :title="`${value} name`"
      :value="value"
      @input="$emit('namechange', index, $event.target.value)"
      @blur="$emit('inputblur', $event)"
    />
  </label>
</template>
