import React, { Component } from 'react'
import Chart from 'color-contrast-table-react'

const colors = [
  {name: 'NAVY', value: '#001f3f'},
  {name: 'BLUE', value: '#0074D9'},
  {name: 'AQUA', value: '#7FDBFF'},
  {name: 'TEAL', value: '#39CCCC'},
  {name: 'OLIVE', value: '#3D9970'},
  {name: 'GREEN', value: '#2ECC40'},
  {name: 'LIME', value: '#01FF70'},
  {name: 'YELLOW', value: '#FFDC00'},
  {name: 'ORANGE', value: '#FF851B'},
  {name: 'RED', value: '#FF4136'},
  {name: 'MAROON', value: '#85144b'},
  {name: 'FUCHSIA', value: '#F012BE'},
  {name: 'PURPLE', value: '#B10DC9'},
  {name: 'BLACK', value: '#111111'},
  {name: 'GRAY', value: '#AAAAAA'},
  {name: 'SILVER', value: '#DDDDDD'}
]

export default class App extends Component {
  render () {
    return (
      <div>
        <Chart 
          colors={colors}
          useStyles
          editNames
          editValues
          // onNamesChange={(index, value) => console.log({index, value})}
          // onValuesChange={(index, value) => console.log({index, value})}
          // onInputBlur={event => console.log(event)}
        />
      </div>
    )
  }
}
