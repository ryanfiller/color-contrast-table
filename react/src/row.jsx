import React from 'react'
import PropTypes from 'prop-types'

import Header from './header.jsx'
import Color from './color.jsx'

const Row = props => {
  return (
    <tr
      className='color-contrast-table__row'
      data-color={color.name}
      style={{
        background: props.color.value,
        color: props.color.value
      }}
    >
      <Header {...props} />

      {props.color.combinationScores.map((color, index) => {
        return (
          <Color
            key={index}
            color={color}
          />
        )
      })}
    </tr>
  )
}

Row.propTypes = {
  color: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired
}

export default Row
