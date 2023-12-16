import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../css/HeaderComponent.css';

const HeaderComponent = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header>
        <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
         <div className='header-container'>
            <a href="/" className='navbar-brand'>
              Bilgi Sistemi
            </a>
            <div className="navbar-buttons">
            <button className="button" onClick={() => navigate('/system-info')}>Bilgi Sistemi Nedir?</button>
            <button className="button" onClick={() => navigate('/personel')}>Personel Bilgi Sistemi Giriş</button>
            <button className="button" onClick={() => navigate('/customers')}>Müşteri Bilgi Sistemi Giriş</button>
            <button className="button" onClick={() => navigate('/contact')}>İletişim</button>
            <button className="button" onClick={() => navigate('/aboutUs')}>Hakkımızda</button>
            <button className="button" onClick={() => navigate('/')}>Anasayfa</button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default HeaderComponent
