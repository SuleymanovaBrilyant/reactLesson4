import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './Style/Header.css';
import Qadinlar from './CIns/Qadinlar';
import Usaqlar from './CIns/Usaqlar';
import Kisiler from './CIns/Kisiler';
// import Footer from './Footer';
// import Main from './Main'

function App() {
  const navigate = useNavigate("/Kisiler");

  const handleClickMen = () => {
    navigate('/kisiler');
  };

  const handleClickWomen = () => {
    navigate('/qadinlar');
  };

  const handleClickUsaq = () => {
    navigate('/usaqlar');
  };

  return (
    <div>
      <div className='Button'>
        <div className='User'>
        <span><i className="fa-solid fa-user"></i></span>
        <span>Suleymanova Brilyant</span>
      </div>
      <div> 
        <button onClick={handleClickMen}>Referee Men</button>
        <button onClick={handleClickWomen}>Referee Women</button>
        <button onClick={handleClickUsaq}><i className="fa-solid fa-restroom"></i></button>
      </div>  
      </div>
    

      <Routes>
        <Route path="/qadinlar" element={<Qadinlar />} />
        <Route path="/usaqlar" element={<Usaqlar />} />
        <Route path="/kisiler" element={<Kisiler />} />
        <Route path="/" element={<Kisiler />} />
      </Routes>
    
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </Router>
  );
}


export default AppWrapper;
