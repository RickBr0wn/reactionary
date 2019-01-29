import React, { Component } from 'react'

export const DarkModeContext = React.createContext()

export class DarkModeWrapper extends Component {
  constructor(props) {
    super(props)
    this.state = {
      on: true
    }
  }

  dark = () => ({
    background: '#333333',
    color: '#f7f7f7',
    transition: 'all .1s'
  })

  light = () => ({
    background: '#f7f7f7',
    color: '#333333',
    transition: 'all .1s'
  })

  toggle = () => this.setState(prevState => ({ on: !prevState.on }))

  render() {
    return (
      <DarkModeContext.Provider
        value={{
          on: this.state.on,
          toggle: this.toggle
        }}
      >
        {this.state.on ? (
          <div style={this.dark()}>{this.props.children}</div>
        ) : (
          <div style={this.light()}>{this.props.children}</div>
        )}
      </DarkModeContext.Provider>
    )
  }
}
