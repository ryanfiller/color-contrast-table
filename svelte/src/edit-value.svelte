<script>
  import { debounce } from 'throttle-debounce'
  export let value = ''
  export let index = ''
  export let onBlur

  import { colorArray } from './stores.js'
  export let onChange = debounce(0, false, (index, value) => {
    colorArray.update(colorArray => {
      const newColors = [...colorArray]
      newColors[index].value = value
      return newColors
    })
  })
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