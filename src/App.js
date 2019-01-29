import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { FirestoreContextWrapper } from './Store/FirestoreContext/FirestoreContextWrapper'
import { DarkModeWrapper } from './Store/DarkMode/DarkModeWrapper'
import CssReset from 'rick-brown-css-reset'
import './index.css'
import HomePage from './Components/HomePage'
import BlogDetail from './Components/BlogDetail'

const App = () => {
  return (
    <DarkModeWrapper>
      <CssReset>
        <FirestoreContextWrapper collection={'blogs'}>
          <BrowserRouter>
            <>
              <Route exact path="/" component={HomePage} />
              <Route path="/:id" component={BlogDetail} />
            </>
          </BrowserRouter>
        </FirestoreContextWrapper>
      </CssReset>
    </DarkModeWrapper>
  )
}

export default App
