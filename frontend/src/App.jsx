import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import Profile from './components/Profile'


function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route exact path='/' element={<Home/>} />
     <Route  exact path='/login' element={ <Login/> } />
     <Route  exact path='/profile' element={ <Profile/> } />
     {/* <Route  exact path='/signup' element={ <Signup/> } /> */}
 
     {/* <Route  exact path='/asd' element={ <SingleProduct/> } /> */}
     
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
