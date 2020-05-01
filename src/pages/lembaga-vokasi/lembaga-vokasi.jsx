import React, { useState } from 'react';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import LembagaVokasiCard from '../../components/lembaga-vokasi-card/lembaga-vokasi-card';

import { ReactComponent as Illustration } from '../../assets/illustrations/lembaga-vokasi-ui.svg';

const LembagaVokasiPage = () => {
  const [isCollapse, setCollapse] = useState(true);

  const lembaga_lembaga = [
    {
      name: 'DPM VOKASI UI',
      fileName: 'dpm-ui.jpg',
      url: 'dpm-vokasi-ui'
    },
    {
      name: 'BEM VOKASI UI',
      fileName: 'bem-vokasi-ui.png',
      url: 'bem-vokasi-ui'
    },
    {
      name: 'HIMRA UI',
      fileName: 'himra-ui.jpg',
      url: 'himra-ui'
    },
    {
      name: 'HIM ADM UI',
      fileName: 'him-adm-ui.jpg',
      url: 'him-adm-ui'
    },
    {
      name: 'HMVA UI',
      fileName: 'hmva-ui.jpg',
      url: 'hmva-ui'
    },
    {
      name: 'IMPERATIF UI',
      fileName: 'imperatif-ui.jpg',
      url: 'imperatif-ui'
    },
    {
      name: 'HM VOKHUM UI',
      fileName: 'hm-vokhum-ui.jpg',
      url: 'hm-vokhum-ui'
    },
    {
      name: 'HMRK UI',
      fileName: 'hmrk-ui.jpg',
      url: 'hmrk-ui'
    },
    {
      name: 'HIMTA UI',
      fileName: 'himta-ui.jpg',
      url: 'himta-ui'
    },
    {
      name: 'HMPM UI',
      fileName: 'hmpm-ui.jpg',
      url: 'hmpm-ui'
    }
  ];

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
              {lembaga_lembaga.map(({ name, fileName, url }) => (
                <LembagaVokasiCard nama={name} src={fileName} url={url} />
              ))}
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
