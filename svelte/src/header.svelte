<script>
  export let color = {}
  export let index

  export let editNames = false
  export let editValues = false
  export let onNamesChange
  export let onValuesChange
  export let onInputBlur

  import getLabelColor from './get-label-color.js'
  import EditName from './edit-name.svelte'
  import EditValue from './edit-value.svelte'
</script>

<th
  class='color-contrast-table__header'
  style="
    background: {color.value};
    color: {getLabelColor(color.value)};
  "
>
  {#if editNames}
    <EditName
      onChange={onNamesChange}
      onBlur={onInputBlur}
      value={color.name}
      index={index}
    />
  {:else}
    <span class='color-contrast-table__header-label'>
      {color.name}
    </span>
  {/if}

  {#if editValues}
    <EditValue
      onChange={onValuesChange}
      onBlur={onInputBlur}
      value={color.value}
      index={index}
    />
  {:else}
    <span class='color-contrast-table__header-label'>
      {color.value}
    </span>
  {/if}
</th>