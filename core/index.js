const wcag = require('wcag-contrast')
const colorcolor = require('colorcolor')

function generateChart(colorArray) {

  // transform the array into one of object with name and hex values
  const colorArrayWithNames = colorArray.map(function(color) {
    if(typeof color === 'string') {
      return { 'name': color, 'value': colorcolor(color, 'hex') }
    } else if (typeof color === 'object' && !!color.name && !!color.value) {
      return { 'name': color.name, 'value': colorcolor(color.value, 'hex') }
    } else {
      throw new Error("Somethin' aint right with your color array.")
    }
  })

  // methods used to do it to 'em

  function getContrast(textColor, backgroundColor) {
    return wcag.hex(textColor, backgroundColor).toFixed(1)
  }

  function getScore(textColor, backgroundColor) {
    const labelRatioScore = getContrast(textColor, backgroundColor)
    if (labelRatioScore >= 7.0) {
      return 'AAA'
    } else if (labelRatioScore >= 4.5) {
      return 'AA'
    } else if (labelRatioScore >= 3.0) {
      return '18+'
    } else {
      return 'fail'
    }
  }

  // where the magic happens and the work actually gets done

  const colorChart = []

  colorArrayWithNames.map(function(textColor) {
    // don't compare the color to itself
    const otherColors = colorArrayWithNames.filter(function(color) {
      return color.value !== textColor.value
    })

    const colorObject = {
      name: textColor.name,
      value: textColor.value,
      combinationScores: []
    }

    otherColors.map(function(backgroundColor){
      colorObject.combinationScores.push({
        name: backgroundColor.name,
        value: backgroundColor.value,
        ratio: getContrast(textColor.value, backgroundColor.value),
        score: getScore(textColor.value, backgroundColor.value)
      })
    })

    colorChart.push(colorObject)
  })
  
  return colorChart
}

module.exports = generateChart