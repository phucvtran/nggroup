import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import logo from '../assets/images/logo.svg'


function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="header">
      <div>
        <a onClick={() => { navigate('/')}} id="logo"><img src={logo}></img><span>ngCleaning</span></a>
      </div>
      <ul>
        <li className={location.pathname === '/'? 'selected' : ''}><a onClick={() => { navigate('/')}}>Home</a></li>
        <li className={location.pathname === '/services'? 'selected' : ''}><a onClick={() => { navigate('/services')}}>Services</a></li>
        <li className={location.pathname === '/contact'? 'selected' : ''}><a onClick={() => { navigate('/contact')}}>Contact Us</a></li>
      </ul>
    </div>
    
  );
}
export default Header;