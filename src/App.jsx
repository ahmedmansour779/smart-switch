import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home/Home'
import LogIn from './pages/LogIn'
import SignUp from './pages/SignUp'
import Cart from './pages/Cart'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/login' element={<LogIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
