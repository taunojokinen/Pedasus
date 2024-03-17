import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/notfound';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

function App() {
 
  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
        <Routes>
          <Route exact path="/"   element={<Home />}/>
          <Route exact path="/about"  element={<About />}/>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>

      <Footer></Footer>
    </>
  );
}

export default App
