import React from 'react';
import '../css/AboutUsComponent.css';
import { Link } from 'react-router-dom'

const AboutUsComponent = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">Hakkımızda</h1>
      <div className="about-us-content">
        <section className="about-us-section">
          <h2>Biz Kimiz?</h2>
          <p>
            XYZ Teknoloji olarak, inovasyon ve mükemmeliyetçiliği odağımıza alarak, sektördeki
            en güncel teknolojileri kullanarak müşterilerimize özel yazılım çözümleri sunmaktayız.
            2001 yılında kurulmuş olan şirketimiz, bilişim teknolojileri alanında global ölçekte
            hizmet vermektedir.
          </p>
        </section>
        <section className="about-us-section">
          <h2>Misyonumuz</h2>
          <p>
            Müşterilerimizin ihtiyaçlarına en uygun çözümleri, en hızlı ve etkili şekilde sunmak;
            teknolojiyi takip eden değil, teknolojiye yön veren bir şirket olmak.
          </p>
        </section>
        <section className="about-us-section">
          <h2>Vizyonumuz</h2>
          <p>
            Yazılım sektöründe yenilikçi çözümlerimizle tanınan, güvenilir ve sürdürülebilir büyüme
            gösteren bir dünya markası olmak.
          </p>
        </section>
        <section className="about-us-section">
          <h2>Ne İşlerle Uğraşırız?</h2>
          <p>
            Kurumsal kaynak planlamasından müşteri ilişkileri yönetimine, büyük veri analitiğinden
            yapay zeka uygulamalarına kadar geniş bir yelpazede yazılım ve danışmanlık hizmetleri
            vermekteyiz. Her bir müşterimizin benzersiz ihtiyaçlarını anlamak ve onlara en uygun
            özelleştirilmiş çözümleri geliştirmek için çalışıyoruz.
          </p>
        </section>
      </div>
      <Link to="/" className="btn btn-primary mb-2 me-2">Anasayfaya Git</Link>

    </div>
  );
};

export default AboutUsComponent;
