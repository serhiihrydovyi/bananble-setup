import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from 'store'
import Home from 'pages/Home/Home'
import Settings from 'pages/Settings/Settings'

import './App.css'

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

const App: React.FC = () => {
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
