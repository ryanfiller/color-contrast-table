<style>
  :global(.use-styles.color-contrast-table ::-moz-color-swatch) {
    border-color: transparent;
  }
  :global(.use-styles.color-contrast-table ::-webkit-color-swatch) {
    border-color: transparent;
  }

  :global(.use-styles.color-contrast-table) {
    border-collapse: collapse;
    font-size: 1em;
  }

  :global(.use-styles .color-contrast-table__row) {}

  :global(.use-styles .color-contrast-table__header) {
    padding: 1em;
  }

  :global(.use-styles .color-contrast-table__color) {
    padding: 1em 1em 1em 0;
    font-size: 1.25em;
  }

  :global(.use-styles .color-contrast-table__color-block) {
    color: currentColor;
    padding: 0 !important;
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    height: 2.5em;
    width: 2.5em;
    min-height: 2.5em;
    min-width: 2.5em;
  }

  :global(.use-styles .color-contrast-table__color-block--fail) {
    position: relative;
  }

  :global(.use-styles .color-contrast-table__color-block--fail span) {
    opacity: 0;
  }

  :global(.use-styles .color-contrast-table__color-block--fail:before),
  :global(.use-styles .color-contrast-table__color-block--fail:after) {
    content: '';
    display: block;
    background: currentColor;
    height: .125em;
    width: 1em;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
  }

  :global(.use-styles .color-contrast-table__color-block--fail:after) {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  :global(.use-styles .color-contrast-table__color-score) {}

  :global(.use-styles .color-contrast-table__header-label) {
    display: block;
  }

  :global(.use-styles .color-contrast-table__header-label + .color-contrast-table__header-label) {
    margin-top: .5em;
  }

  :global(.use-styles .color-contrast-table__header-label--edit-name),
  :global(.use-styles .color-contrast-table__header-label--edit-value) {
    display: block;
    position: relative;
    padding: 0 .25em;
  }

  :global(.use-styles .color-contrast-table__header-label--edit-name span) {
    opacity: 0;
    pointer-events: none;
  }

  :global(.use-styles .color-contrast-table__header-label--edit-name input) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    padding: 0;
    border: none;
    font-size: 1em;
    font-weight: bold;
    background: transparent;
    color: currentColor;
    text-align: center;
    cursor: pointer;
  }

  :global(.use-styles .color-contrast-table__header-label--edit-value span) {
    pointer-events: none;
    position: relative;
    z-index: 2;
  }

  :global(.use-styles .color-contrast-table__header-label--edit-value input) {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    height: 100%;
    padding: 0;
    cursor: pointer;
    width: 100%;
    background-color: transparent;
    border-color: transparent;
  }
</style>