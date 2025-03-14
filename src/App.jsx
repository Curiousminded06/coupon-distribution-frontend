import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Login from './Components/Login'
import ClaimCoupon from './Components/ClaimCoupon'
function App() {


  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/claim" element={<ClaimCoupon />} />

      </Routes>
      
      </BrowserRouter>
    </>
  )
}

export default App
