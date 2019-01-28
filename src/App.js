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
            <div>
              <Switch>
                <Route exact path="/" component={HomePage} />
              </Switch>
              <Switch>
                <Route path="/:id" component={BlogDetail} />
              </Switch>
            </div>
          </BrowserRouter>
        </FirestoreContextWrapper>
      </CssReset>
    </DarkModeWrapper>
  )
}

export default App

//   < DarkModeContext.Consumer >
//   {({ on, toggle }) => {
//   return (
//     <div className="app">
//       <Header on={on} toggle={toggle} />
//       <AboutMe />
//       <BlogList />
//     </div>
//   )
// }}
//           </DarkModeContext.Consumer >
