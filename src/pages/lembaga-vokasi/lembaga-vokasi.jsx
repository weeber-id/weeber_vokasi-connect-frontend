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
      url: 'dpm-vokasi-ui',
      fileName: 'logo-01.png'
    },
    {
      name: 'BEM VOKASI UI',
      url: 'bem-vokasi-ui',
      fileName: 'logo-02.png'
    },
    {
      name: 'HIMRA UI',
      url: 'himra-ui',
      fileName: 'logo-03.png'
    },
    {
      name: 'HIM ADM UI',
      url: 'him-adm-ui',
      fileName: 'logo-04.png'
    },
    {
      name: 'HMVA UI',
      url: 'hmva-ui',
      fileName: 'logo-05.png'
    },
    {
      name: 'IMPERATIF UI',
      url: 'imperatif-ui',
      fileName: 'logo-06.png'
    },
    {
      name: 'HM VOKHUM UI',
      url: 'hm-vokhum-ui',
      fileName: 'logo-07.png'
    },
    {
      name: 'HMRK UI',
      url: 'hmrk-ui',
      fileName: 'logo-08.png'
    },
    {
      name: 'HIMTA UI',
      url: 'himta-ui',
      fileName: 'logo-09.png'
    },
    {
      name: 'HMPM UI',
      url: 'hmpm-ui',
      fileName: 'logo-10.png'
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
            <div
              className={`lembaga-lembaga__container ${
                isCollapse ? '' : 'show'
              }`}
            >
              {lembaga_lembaga.map(({ name, fileName, url }) => (
                <LembagaVokasiCard
                  key={url}
                  nama={name}
                  src={fileName}
                  url={url}
                />
              ))}
            </div>
          </section>
          <div
            onClick={() => {
              setCollapse(!isCollapse);
            }}
            className="lihat-selengkapnya"
          >
            <span>
              {isCollapse ? 'Lihat Selengkapnya' : 'Lihat Lebih Sedikit'}
            </span>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LembagaVokasiPage;
