import React from 'react'
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Registration from './pages/Registration';
import Login from './pages/Login';
import Service from './pages/Service';
import Navbar from './components/Navbar';
import Error from './pages/Error';
import Footer from './components/Footer/Footer';
import Logout from './pages/Logout';


const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/registration' element={<Registration/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App