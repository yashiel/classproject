import './App.css'
import Home from './pages/Home'
import Artists from './pages/Artists'
import Events from './pages/Events'
import Products from './pages/Products'
import { Routes, Route } from 'react-router'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/artists' element={<Artists />} />
        <Route path='/events' element={<Events />} />
        <Route path='/products' element={<Products />} />
      </Routes>
    </>
  )
}

export default App
