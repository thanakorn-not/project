import React from 'react'
import Home from './pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from './pages/Contact';
import Harward from './pages/Harward';
import Andyou from './pages/Andyou';
import Multiple from './pages/Multiple';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/multiple' element={<Multiple/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/harward' element={<Harward/>} />
          <Route path='/andyou' element={<Andyou/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
      </Router>
    </>
    
  )
}

export default App