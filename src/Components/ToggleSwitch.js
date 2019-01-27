import React from 'react'

const ToggleSwitch = ({ on, toggle }) => {
  return (
    <div onClick={toggle} className="darkmode-toggle">
      {on && on ? <i className="fas fa-sun" /> : <i className="fas fa-moon" />}
    </div>
  )
}

export default ToggleSwitch
