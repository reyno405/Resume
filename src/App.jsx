import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <div>
        <Header></Header> 
        <Nav></Nav> 
        <About></About>
        <Experience></Experience> 
        <Portfolio></Portfolio>
        
        <Contact></Contact> 
        <Footer></Footer> 
    </div>
  )
}

export default App
