import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import './index.css'
import ContactUs from './pages/ContactUs'
import Home from './pages/Home/Home'
import LogIn from './pages/LogIn'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contactUs' element={<ContactUs />} />
          <Route path='/login' element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
