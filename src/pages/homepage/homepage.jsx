import React from 'react';

import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';

import { ReactComponent as Beranda1 } from '../../assets/illustrations/beranda1.svg';
import { ReactComponent as Beranda2 } from '../../assets/illustrations/beranda2.svg';
import { ReactComponent as Akademik } from '../../assets/icons/akademik.svg';
import { ReactComponent as Fasilitas } from '../../assets/icons/fasilitas.svg';
import { ReactComponent as Finansial } from '../../assets/icons/finansial.svg';

const HomePage = () => {
  return (
    <article className="homepage">
      <Header />

      {/* Section Heroes */}

      <section className="heroes">
        <div className="heroes__welcome">
          <h1 style={{ color: '#fff' }} className="heading-primary">
            Selamat datang! <br /> Mari berjejaring bersama di <br />
            <span>Vokasi Connect</span>
          </h1>
          <Button className="mt-sm">Telusuri Lebih Jauh</Button>
        </div>
        <div className="heroes__picture">
          <Beranda1 />
        </div>
      </section>

      {/* Section IKM Vokasi Aspiration Center */}

      <section className="aspirasi">
        <h1
          style={{ color: 'var(--color-dark-grey-1)' }}
          className="heading-primary text-align-center mb-sm"
        >
          IKM VOKASI ASPIRATION CENTER
        </h1>
        <div className="aspirasi__content">
          <div className="aspirasi__picture">
            <Beranda2 />
          </div>
          <div className="aspirasi__description">
            <p
              className="text mb-sm"
              style={{ color: 'var(--color-dark-grey-1)' }}
            >
              IKM VOKASI ASPIRATION CENTER merupakan platform aspirasi mahasiswa
              Vokasi UI yang melayani pengaduan kesejahteraan mahasiswa.
              Aspirasi yang terkirim nantinya akan ditindaklanjuti melalui
              advokasi kepada pihak-pihak yang terkait.
              <br /> <br />
              Beberapa hal yang bisa kalian sampaikan,
            </p>
            <div className="aspirasi__item">
              <Akademik className="aspirasi__icon" />
              <span>Akademik</span>
            </div>
            <div className="aspirasi__item">
              <Fasilitas className="aspirasi__icon" />
              <span>Fasilitas</span>
            </div>
            <div className="aspirasi__item">
              <Finansial className="aspirasi__icon" />
              <span>Finansial</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section Aspiration Form */}

      <section className="form-aspirasi">
        <h1
          style={{ color: 'var(--color-dark-grey-1)' }}
          className="heading-primary text-align-center mb-sm"
        >
          IKM VOKASI ASPIRATION CENTER
        </h1>
      </section>

    <Footer/>
    </article>
  );
};

export default HomePage;
