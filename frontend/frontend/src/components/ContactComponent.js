import React from 'react';
import '../css/ContactComponent.css'; // CSS dosyasının yolu, gerektiği gibi ayarlanmalıdır.
import { Link } from 'react-router-dom'

const ContactComponent = () => {
  return (
    <div className="contact-container">
      <h1 className="contact-title">İLETİŞİM</h1>
      <div className="contact-info">
        <p><strong>Adres:</strong> İnönü Üniversitesi Mühendislik Fakültesi Bilgisayar Mühendisliği Bölümü</p>
        <p><strong>Telefon:</strong> 0534 634 38 33</p>
        <p><strong>Fax:</strong> 0444 444 44 44</p>
      </div>
      <Link to="/" className="btn btn-primary mb-2 me-2">Anasayfaya Git</Link>
    </div>
  );
};

export default ContactComponent;
