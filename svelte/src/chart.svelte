<script>
  export let colors = []
  export let useStyles = false
  export let editNames = null
  export let editValues = null
  export let onNamesChange
  export let onValuesChange
  export let onInputBlur

  import generateChart from 'color-contrast-table'
  import { colorArray } from './stores.js'

  import Table from './table.svelte'
  import Styles from './styles.svelte'

  colorArray.set(colors)
  colorArray.subscribe(value => colors = value)

  $: colors = generateChart(colors)
</script>

<Styles />

<Table
  {useStyles}
  {colors}
  editNames={!!onNamesChange || !!editNames}
  editValues={!!onValuesChange || !!editValues}
  onNamesChange={onNamesChange}
  onValuesChange={onValuesChange}
  {onInputBlur}
/>