import React, { useState } from 'react'
import PropTypes from 'prop-types'
import generateChart from 'color-contrast-table'
import Table from './table.jsx'
import Styles from './styles.jsx'

const Chart = props => {

  const [colors, setColors] = useState(props.colors)

  const onNamesChange = (index, value) => {
    // guard against array map failing
    if (value === '') { value = `Color ${index + 1}` }
    const newColors = [...colors]
    newColors[index].name = value
    setColors(newColors)
  }

  const onValuesChange = (index, value) => {
    const newColors = [...colors]
    newColors[index].value = value
    setColors(newColors)
  }

  const colorChart = generateChart(colors)

  return (
    <React.Fragment>
      {props.useStyles && <Styles />}
      <Table
        colors={colorChart}
        editNames={!!props.editNames || !!props.onNamesChange}
        editValues={!!props.editValues || !!props.onValuesChange}
        onNamesChange={props.onNamesChange || onNamesChange}
        onValuesChange={props.onValuesChange || onValuesChange}
        onInputBlur={props.onInputBlur}
      />
    </React.Fragment>
  )
}

Chart.propTypes = {
  useStyles: PropTypes.bool,
  editNames: PropTypes.bool,
  editValues: PropTypes.bool,
  onNamesChange: PropTypes.func,
  onValuesChange: PropTypes.func,
  onInputBlur: PropTypes.func,
  colors: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string
      })
    ]).isRequired
  ).isRequired
}

export default Chart
