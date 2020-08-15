import React from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'throttle-debounce'

import getLabelColor from './get-label-color'
import EditValue from './edit-value.jsx'
import EditName from './edit-name.jsx'

const Header = props => {
  return (
    <th
      className='color-contrast-table__header'
      style={{
        background: props.color.value,
        color: getLabelColor(props.color.value)
      }}
    >
      {props.editNames
        ? <EditName
          onChange={debounce(50, props.onNamesChange)}
          onBlur={props.onInputBlur}
          value={props.color.name}
          index={props.index}
        />
        : <span className='color-contrast-table__header-label'>
          {props.color.name}
        </span>
      }
      {props.editValues
        ? <EditValue
          onChange={debounce(50, props.onValuesChange)}
          onBlur={props.onInputBlur}
          value={props.color.value}
          index={props.index}
        />
        : <span className='color-contrast-table__header-label'>
          {props.color.value}
        </span>
      }
    </th>
  )
}

Header.propTypes = {
  color: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  editNames: PropTypes.bool.isRequired,
  editValues: PropTypes.bool.isRequired,
  onNamesChange: PropTypes.func.isRequired,
  onValuesChange: PropTypes.func.isRequired,
  onInputBlur: PropTypes.func
}

export default Header
