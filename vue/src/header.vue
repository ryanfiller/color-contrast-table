<script>  
  import getLabelColor from './get-label-color.js'
  import EditName from './edit-name.vue'
  import EditValue from './edit-value.vue'

  export default {
    name: 'Header',
    components: {
      EditName,
      EditValue
    },
    props: {
      color: Object,
      index: Number,
      editNames: Boolean,
      editValues: Boolean
    },
    methods: {
      getLabelColor,
      namechange(index, value) { this.$emit('namechange', index, value) },
      valuechange(index, value) { this.$emit('valuechange', index, value) },
      inputblur(event) { this.$emit('inputblur', event) }
    }
  }
</script>

<template>
  <th
    class='color-contrast-table__header'
    :style="{
      background: color.value,
      color: getLabelColor(color.value)
    }"
  >
      <EditName
        v-if="editNames"
        :value="color.name"
        :index="index"
        @namechange="namechange"
        @inputblur="inputblur"
      />
      <span 
        v-else
        class='color-contrast-table__header-label'
      >
        {{ color.name }}
      </span>

      <EditValue
        v-if="editValues"
        :value="color.value"
        :index="index"
        @valuechange="valuechange"
        @inputblur="inputblur"
      />
      <span 
        v-else
        class='color-contrast-table__header-label'
      >
        {{ color.value }}
      </span>
  </th>
</template>
