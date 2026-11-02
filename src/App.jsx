import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import NotFound from './pages/notfound';
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>

      <Footer></Footer>
    </>
  );
}

export default App
