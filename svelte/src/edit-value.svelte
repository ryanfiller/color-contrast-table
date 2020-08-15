<script>
  export let value = ''
  export let index
  export let onChange
  export let onBlur
</script>

<label class='color-contrast-table__header-label color-contrast-table__header-label--edit-value'>
  <span>
    {value}
  </span>
  <input
    type='color'
    title={`${value} color`}
    value={value}
    on:input={event => onChange(index, event.target.value)}
    on:blur={event => onBlur(event)}
  />
</label>