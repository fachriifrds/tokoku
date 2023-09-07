import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterPage from './pages/RegisterPage'
import LoginPage from './pages/LoginPage'
import { BrowserRouter , Route , Routes} from 'react-router-dom'
import KeranjangPage from './pages/KeranjangPage'

function App() {

  return (
    <>
 <BrowserRouter>
 <Routes>
 <Route path='/' element={<LoginPage/>}/>
 <Route path='/register' element={<RegisterPage/>}/>
 <Route path='/keranjang' element={<KeranjangPage/>}/>
 </Routes>
 </BrowserRouter>
    </>
  )
}

export default App
