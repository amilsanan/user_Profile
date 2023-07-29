import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Login from './components/Login'
import Signup from './components/Signup'
// import AdminHomePage from './adminPages/AdminHomePage'
// import AdminProductAdd from './adminComponents/AdminProductAdd'
// import Products from './components/Products'
// import SingleProduct from './components/SingleProduct'

function App() {
  

  return (
    <>
    <BrowserRouter>
     <Routes>
     <Route exact path='/' element={<LandingPage/>} />
     <Route  exact path='/login' element={ <Login/> } />
     <Route  exact path='/signup' element={ <Signup/> } />
     {/* <Route  exact path='/admin' element={ <AdminHomePage/> } /> */}
     {/* <Route  exact path='/admin/addProduct' element={ <AdminProductAdd/> } />
     <Route  exact path='/showPro' element={ <Products/> } />
     <Route  exact path='/singleProduct' element={ <SingleProduct/> } /> */}
     
     </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
