import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
      </Routes>
    </div>
  )
}

export default App
