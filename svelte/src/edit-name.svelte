<script>
  import { debounce } from 'throttle-debounce'
  export let value = ''
  export let index = ''
  export let onBlur

  import { colorArray } from './stores.js'
  export let onChange = debounce(0, false, (index, value) => {
    // guard against array map failing
    if (value === '') { value = `Color ${index + 1}` }
    colorArray.update(colorArray => {
      const newColors = [...colorArray]
      newColors[index].name = value
      return newColors
    })
  })
</script>

<label class='color-contrast-table__header-label color-contrast-table__header-label--edit-name'>
  <span>
    {value}
  </span>
  <input
    type='text'
    title={`${value} name`}
    value={value}
    on:input={event => onChange(index, event.target.value)}
    on:blur={event => onBlur(event)}
  />
</label>