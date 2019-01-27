import React from 'react'
import { FirestoreContextWrapper } from './Store/FirestoreContext/FirestoreContextWrapper'
import {
  DarkModeWrapper,
  DarkModeContext
} from './Store/DarkMode/DarkModeWrapper'
import CssReset from 'rick-brown-css-reset'
import './index.css'
import BlogList from './Components/BlogList'
import Header from './Components/Header'
import AboutMe from './Components/AboutMe'

const App = () => {
  return (
    <DarkModeWrapper>
      <CssReset>
        <FirestoreContextWrapper collection={'blogs'}>
          <DarkModeContext.Consumer>
            {({ on, toggle }) => {
              return (
                <div className="app">
                  <Header on={on} toggle={toggle} />
                  <AboutMe/>
                  <BlogList />
                </div>
              )
            }}
          </DarkModeContext.Consumer>
        </FirestoreContextWrapper>
      </CssReset>
    </DarkModeWrapper>
  )
}

export default App
