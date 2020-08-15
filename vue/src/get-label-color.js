import * as wcag from 'wcag-contrast'

const getLabelColor = color => {
  const score = wcag.hex('#fffff', color).toFixed(1)
  let labelTextColor = '#000000'
  if (score >= 3.0) {
    labelTextColor = '#ffffff'
  }
  return labelTextColor
}

export default getLabelColor