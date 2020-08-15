<script>
  export let colors = []
  export let useStyles

  import Row from './row.svelte'
  const props = $$restProps
</script>


<table
  class='color-contrast-table'
  class:use-styles={useStyles}
>
  <tbody>
    {#each colors as color, index}
      <Row
        index={index}
        color={color}
        {...props}
      />
    {/each}
  </tbody>
</table>