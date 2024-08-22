import React, { useContext } from 'react';

import {Routes, Route, Navigate, useLocation, Outlet} from "react-router-dom"
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Contact from './components/Contact';


const NotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
};

function App() {
  const location = useLocation();
  return (
    <div className='page'>
    <>
      {location.pathname === '/404' ? null : <Header/> }
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/404' element={<NotFound/>}></Route>
        <Route path="*" element={<Navigate to="/404" replace />}></Route>
      </Routes>
    </>
    {location.pathname === '/404' ? null : <Footer/> }
    </div>
  );
}

export default App;
