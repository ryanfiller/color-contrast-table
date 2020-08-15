import React from 'react'
import PropTypes from 'prop-types'

const EditName = props => {
  return (
    <label className='color-contrast-table__header-label color-contrast-table__header-label--edit-name'>
      <span>
        {props.value}
      </span>
      <input
        type='text'
        title={`${props.value} name`}
        value={props.value}
        onChange={event => props.onChange(props.index, event.target.value)}
        onBlur={event => props.onBlur(event)}
      />
    </label>
  )
}

EditName.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default EditName
