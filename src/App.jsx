import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

function App() {
 
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Home />
      <Footer></Footer>
    </>
  )
}

export default App
