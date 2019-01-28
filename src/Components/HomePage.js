import React from 'react'
import { DarkModeContext } from '../Store/DarkMode/DarkModeWrapper'
import BlogList from './BlogList'
import Header from './Header'
import AboutMe from './AboutMe'

const HomePage = () => {
  return (
    <div>
      <DarkModeContext.Consumer>
        {({ on, toggle }) => {
          return (
            <div className="app">
              <Header on={on} toggle={toggle} />
              <AboutMe />
              <BlogList />
            </div>
          )
        }}
      </DarkModeContext.Consumer>
    </div>
  )
}

export default HomePage
