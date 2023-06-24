import React, { useState } from 'react'
import { Route, Routes, Navigate  } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Page404 from './pages/Page404'
import Products from './pages/Products'
import Signup from './pages/Signup'
import NavigationBar from './components/NavigationBar'
import FooterEnd from './components/FooterEnd'

function App() {

  const [user, setUser] = useState(true)
  return (
    <>
      <NavigationBar />

      {
        user

          ?
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/Products' element={<Products />} />
              <Route path='*' element={<Page404 />} />
            </Routes>
          )
          :
          (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/login' element={<Login />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='*' element={<Navigate to="/login" replace={true} />} />
            </Routes>
          )
      }



      <FooterEnd />


    </>
  )
}

export default App