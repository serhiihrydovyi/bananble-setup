import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'

import Home from 'pages/Home/Home'
import Settings from 'pages/Settings/Settings'
import { Provider } from 'react-redux'
import { setupStore } from 'store'

import './App.less'

const Navigation = () => (
  <div>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/settings'>Settings</Link>
      </li>
    </ul>
    <hr />
  </div>
)

const store = setupStore()

const App: React.FC = () => {
  console.log('app')
  return (
    <Provider store={store}>
      <>
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </>
    </Provider>
  )
}

export default App
