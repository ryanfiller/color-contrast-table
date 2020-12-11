import React from 'react'
import PropTypes from 'prop-types'

import getLabelColor from './get-label-color'

const Color = props => {
  return (
    <td
      className='color-contrast-table__color'
      data-color={color.name}
    >
      <div
        title={`${props.color.ratio} : 1`}
        className={props.color.score !== 'fail' ? 'color-contrast-table__color-block' : 'color-contrast-table__color-block color-contrast-table__color-block--fail'}
        style={{
          background: props.color.value,
          color: getLabelColor(props.color.value)
        }}
      >
        <span className='color-contrast-table__color-score'>
          {props.color.score !== 'fail' ? props.color.score : 'X'}
        </span>
      </div>
    </td>
  )
}

Color.propTypes = {
  color: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    ratio: PropTypes.string.isRequired,
    score: PropTypes.string.isRequired
  }).isRequired
}

export default Color
