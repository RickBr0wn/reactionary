import React from 'react'
import ToggleSwitch from './ToggleSwitch'

const Header = props => {
  console.log(props)
  return (
    <div className="header">
      <h1>Reactionary</h1>
      <ToggleSwitch on={props.on} toggle={props.toggle} />
    </div>
  )
}

export default Header
