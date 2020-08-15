import React from 'react'
import PropTypes from 'prop-types'

import Row from './row.jsx'

const Table = props => {
  return (
    <table className='color-contrast-table'>
      <tbody>
        {props.colors.map((color, index) => {
          return (
            <Row
              key={index}
              index={index}
              color={color}
              {...props}
            />
          )
        })}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      value: PropTypes.string
    }).isRequired
  ).isRequired
}

export default Table
