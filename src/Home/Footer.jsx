import React from 'react';
import './Style/Footer.css';

function Footer() {
  function openFIFA() {
    window.open('https://www.fifa.com/fifaplus/en', '_blank');
  }

  function openUEFA() {
    window.open('https://www.uefa.com/', '_blank');
  }

  return (
    <div className='FooterBackground'>
      <h1>"Referee"</h1>
      <div>
        <button onClick={openFIFA}>FIFA</button>
        <button onClick={openUEFA}>UEFA</button>
      </div>
    </div>
  );
}

export default Footer;
