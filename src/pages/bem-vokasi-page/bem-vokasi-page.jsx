import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as LogoHero } from '../../assets/logos/logo-profil.svg';
import { ReactComponent as Wing } from '../../assets/logos/wing.svg';
import { ReactComponent as Bird } from '../../assets/logos/bird.svg';
import { ReactComponent as BirdColor } from '../../assets/logos/bird-color.svg';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import LogoCard from '../../components/logo-card/logo-card';

const BemVokasiPage = (props) => {
  const { id } = useParams();

  if (id === 'logo') {
    return (
      <>
        <Header color="navy-2" />
        <main className="logo">
          <section className="logo__hero">
            <LogoHero height="30vw" width="30vw" />
          </section>
          <div className="logo__pembatas" />
          <section className="filosofi-logo">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-center mb-md"
            >
              FILOSOFI LOGO
            </h1>
            <div className="filosofi-logo__cards mb-md">
              <LogoCard
                text="3 Sayap Burung Mockingjay melambangkan 3 bidang studi yang dinaungi BEM Vokasi UI yakni, Administrasi Bisnis, Sosial Humaniora, dan Kesehatan."
                Component={Wing}
              />
              <LogoCard
                text="Logo diinterpretasikan sebagai Burung Mockingjay yang memiliki makna konsistensi keberanian dan integritas BEM Vokasi UI."
                Component={Bird}
              />
              <LogoCard
                text="Keberagaman warna merupakan identitas BEM Vokasi UI atas beragamnya warna gerakan kemahasiswaan."
                Component={BirdColor}
              />
            </div>
            <p
              style={{
                color: 'white',
                fontSize: '2rem',
                width: '80%',
                margin: '0 auto'
              }}
              className="text text-align-center"
            >
              Logo BEM Vokasi UI sebagai simbol perwujudan harmonisasi dan
              sinergitas BEM Vokasi UI dalam mencapai kebermanfaatan secara
              nyata dan meluas. Lima unsur warna melambangkan 5 unsur dasar
              tanggung jawab moral BEM, yakni Kemahasiswaan, Katalis Pergerakan,
              Pengembangan Kepribadian, Pengabdian Masyarakat, dan Advokasi.
            </p>
          </section>
        </main>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header color="yellow-light" />
      <main className="profil">
        <section className="profil__header">
          <div
            style={{
              backgroundImage: `url(${require('../../assets/images/profil-organisasi/hero-pemkar.jpg')})`
            }}
            className="profil__hero"
          />
          <div className="profil__name">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-center"
            >
              Departemen Perkembangan Karier
            </h1>
          </div>
        </section>
        <section className="profil-overview">
          <div className="profil-overview__description">
            <p className="text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              necessitatibus ex delectus veritatis, provident nisi inventore
              dolorem tempore similique officiis? Dolor non libero quos officia
              fugiat est assumenda esse eum. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Atque earum architecto illum
              consequatur quasi illo, minima aspernatur, officia quis autem
              error at voluptatibus adipisci voluptate deserunt sequi animi
              possimus accusantium.
            </p>
          </div>
          <div className="profil-overview__pejabat">
            <img
              src={require('../../assets/images/lembaga-vokasi/foto-01.png')}
              alt=""
              className="profil-overview__img"
            />
            <img
              src={require('../../assets/images/lembaga-vokasi/foto-01.png')}
              alt=""
              className="profil-overview__img"
            />
            <img
              src={require('../../assets/images/lembaga-vokasi/foto-01.png')}
              alt=""
              className="profil-overview__img"
            />
          </div>
          <div className="profil-overview__staff">
            <div className="profil-overview__container-staff">
              <h2 className="heading-secondary">STAFF</h2>
              <ol className="profil-overview__items">
                <li className="profil-overview__item">Aulia Shofa Naufalie</li>
                <li className="profil-overview__item">Staff 2</li>
                <li className="profil-overview__item">Abdul Aziz Bin Salman</li>
              </ol>
            </div>
          </div>
        </section>
        <section className="proker">
          <h1
            style={{ color: 'white' }}
            className="heading-primary text-align-center mb-md"
          >
            PROGRAM KERJA
          </h1>
          <div className="proker__container">
            <div className="proker__item">
              <span>Proker 1 asdfas aswerq werawef aasdfas dfasdf</span>
            </div>
            <div className="proker__item">
              <span>Proker 1</span>
            </div>
            <div className="proker__item">
              <span>Proker 1</span>
            </div>
            <div className="proker__item">
              <span>Proker 1</span>
            </div>
            <div className="proker__item">
              <span>Proker 1</span>
            </div>
            <div className="proker__item">
              <span>Proker 1</span>
            </div>
          </div>
        </section>
        <section className="profil-nav">
          <div className="profil-nav__previous">
            <span className="profil-nav__label">Previous</span>
            <Link to="/profil-organisasi/test" className="profil-nav__link">
              &lt; Kestari
            </Link>
          </div>
          <div className="profil-nav__next">
            <span className="profil-nav__label">Next</span>
            <Link to="/profil-organisasi/test" className="profil-nav__link">
              Sosmaling &gt;
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BemVokasiPage;
