import React, { useState } from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import LembagaVokasiCard from '../../components/lembaga-vokasi-card/lembaga-vokasi-card';

import { ReactComponent as Illustration } from '../../assets/illustrations/lembaga-vokasi-ui.svg';

const LembagaVokasiPage = () => {
  const [isCollapse, setCollapse] = useState(true);
  return (
    <>
      <Header color="yellow" />
      <main>
        <div className="lembaga-vokasi">
          <section className="lembaga-vokasi__heroes">
            <div className="lembaga-vokasi__illustration">
              <Illustration />
            </div>
            <div className="lembaga-vokasi__cta">
              <h1
                style={{ color: 'var(--color-green-1)' }}
                className="heading-primary text-align-right"
              >
                Lembaga <br /> Kemahasiswaan <br /> Vokasi UI
              </h1>
            </div>
          </section>
          <section
            className={`lembaga-lembaga ${isCollapse ? 'collapse' : null}`}
          >
            <div className="lembaga-lembaga__container">
              <LembagaVokasiCard />
              <LembagaVokasiCard />
              <LembagaVokasiCard />
              <LembagaVokasiCard />
              <LembagaVokasiCard />
            </div>
          </section>
          <div
            onClick={() => {
              setCollapse(!isCollapse);
            }}
            className="lihat-selengkapnya"
          >
            <span>{isCollapse ? 'Lihat Selengkapnya' : 'Lebih Sedikit'}</span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LembagaVokasiPage;
