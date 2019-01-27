import React from 'react'

import ContextProvider from './Store/Context/ContextProvider'
import BlogList from './Components/BlogList'

const App = () => {
  return <div>
      <ContextProvider>
        <BlogList />  
      </ContextProvider>
    </div>
}

export default App
