import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import MainContent from './MainContent'
const App = () => {
  return (
    <main>
      <div className='container'>
        <Header />
        <MainContent />
        <div className='line'></div>
        <Footer />
      </div>
    </main>
  )
}
export default App
