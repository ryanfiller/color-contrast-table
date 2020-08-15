<script>
  export let color = {}

  import getLabelColor from './get-label-color'
</script>

<td class='color-contrast-table__color'>
  <div
    title={`${color.ratio} : 1`}
    class={color.score !== 'fail' ? 'color-contrast-table__color-block' : 'color-contrast-table__color-block color-contrast-table__color-block--fail'}
    style="
      background: {color.value};
      color: {getLabelColor(color.value)};
    "
  >
    <span class='color-contrast-table__color-score'>
      {color.score !== 'fail' ? color.score : 'X'}
    </span>
  </div>
</td>