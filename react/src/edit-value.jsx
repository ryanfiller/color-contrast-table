import React from 'react'
import PropTypes from 'prop-types'

const EditValue = props => {
  return (
    <label className='color-contrast-table__header-label color-contrast-table__header-label--edit-value'>
      <span>
        {props.value}
      </span>
      <input
        type='color'
        title={`${props.value} color`}
        value={props.value}
        onChange={event => props.onChange(props.index, event.target.value)}
        onBlur={event => props.onBlur(event)}
      />
    </label>
  )
}

EditValue.propTypes = {
  onChange: PropTypes.func.isRequired,
  onBlur: PropTypes.func,
  value: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired
}

export default EditValue
