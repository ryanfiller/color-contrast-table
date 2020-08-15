<script>
  export let color = {}

  import Header from './header.svelte'
  import Color from './color.svelte'
</script>

<tr
  class='color-contrast-table__row'
  style="
    background: {color.value};
    color: {color.value};
  "
>
  <Header {...$$props} />

  {#each color.combinationScores as color, index}
    <Color {color} />
  {/each}
</tr>