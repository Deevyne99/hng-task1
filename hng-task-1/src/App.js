import React from 'react'
import Footer from './components/Footer'
import Contact from './pages/contact'
import Home from './pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
  return (
    <main>
      <div className='container'>
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Router>
        <div className='line'></div>
        <Footer />
      </div>
    </main>
  )
}
export default App
