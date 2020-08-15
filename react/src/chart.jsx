import React from 'react'
import PropTypes from 'prop-types'
import generateChart from 'color-contrast-table'
import Table from './table.jsx'
import Styles from './styles.jsx'

class Chart extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      colors: props.colors
    }
  }

  onNamesChange = (index, value) => {
    // guard against array map failing
    if (value === '') { value = `Color ${index + 1}` }
    const newColors = [...this.state.colors]
    newColors[index].name = value
    this.setState({colors: newColors})
  }

  onValuesChange = (index, value) => {
    const newColors = [...this.state.colors]
    newColors[index].value = value
    this.setState({colors: newColors})
  }

  render() {
    const colors = generateChart(this.state.colors)

    return (
      <React.Fragment>
        {this.props.useStyles && <Styles />}
        <Table
          colors={colors}
          editNames={!!this.props.editNames || !!this.props.onNamesChange}
          editValues={!!this.props.editValues || !!this.props.onValuesChange}
          onNamesChange={this.props.onNamesChange || this.onNamesChange}
          onValuesChange={this.props.onValuesChange || this.onValuesChange}
          onInputBlur={this.props.onInputBlur}
        />
      </React.Fragment>
    )
  }
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
