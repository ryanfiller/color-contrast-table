<script>
  export let colors = []
  export let useStyles = false
  export let editNames = null
  export let editValues = null
  export let onNamesChange
  export let onValuesChange
  export let onInputBlur

  const defaultOnNamesChange = (index, value) => {
    // guard against array map failing
    if (value === '') { 
      value = `Color ${index + 1}`
    }
    const newColors = [...colors]
    newColors[index].name = value
    colors = newColors
  }

  const defaultOnValuesChange = (index, value) => {
    const newColors = [...colors]
    newColors[index].value = value
    colors = newColors
  }


  import generateChart from 'color-contrast-table'

  import Table from './table.svelte'
  import Styles from './styles.svelte'

  $: colors = generateChart(colors)
</script>

<Styles />

<Table
  {useStyles}
  {colors}
  editNames={!!onNamesChange || !!editNames}
  editValues={!!onValuesChange || !!editValues}
  onNamesChange={defaultOnNamesChange || onNamesChange}
  onValuesChange={defaultOnValuesChange || onValuesChange}
  {onInputBlur}
/>