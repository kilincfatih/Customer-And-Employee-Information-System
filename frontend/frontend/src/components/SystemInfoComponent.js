import React from 'react';
import '../css/SystemInfoComponent.css';
import { Link } from 'react-router-dom'

const SystemInfoComponent = () => {
  return (
    <div className="system-info-container">
      <h1 className="title">Bilgi Sistemlerinin Gücünü Keşfedin</h1>
      <p className="intro">
        Çağımız bilgi çağı ve bilgi sistemleri, işletmelerin en değerli varlıklarından biri haline geldi. 
        Verimlilik, etkinlik ve stratejik karar verme süreçlerinde kritik bir rol oynayan bilgi sistemleri,
        veri akışını düzenler ve iş süreçlerini optimize eder.
      </p>
      <h2 className="section-title">Müşteri Bilgi Sistemi (MBS)</h2>
      <p className="section-content">
        Müşteri Bilgi Sistemi, müşterilerinizle ilgili tüm verileri merkezi bir noktada toplayarak
        müşteri memnuniyetini ve sadakatini artırmanın yanı sıra satış ve pazarlama stratejilerinizi
        güçlendirmenize olanak tanır. Tüm müşteri etkileşimlerini kaydederek, kişiselleştirilmiş
        pazarlama kampanyaları ve hedefli satış fırsatları yaratır.
      </p>
      <h2 className="section-title">Personel Bilgi Sistemi (PBS)</h2>
      <p className="section-content">
        Personel Bilgi Sistemi, insan kaynakları yönetiminizi dönüştürür. Çalışanlarınızın performansını
        takip etmek, bordro işlemlerini kolaylaştırmak ve kariyer gelişim planlarını desteklemek için
        eksiksiz bir çözüm sunar. Bu sistemle, çalışan memnuniyetini artırır ve işgücü verimliliğini
        maksimize edersiniz.
      </p>
      <Link to="/" className="btn btn-primary mb-2 me-2">Anasayfaya Git</Link>
      <button className="info-button" onClick={() => alert('Daha fazla bilgi için bize ulaşın!')}>
        Daha Fazla Bilgi Alın
      </button>
      

    </div>
  );
};

export default SystemInfoComponent;