import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Prestasi from '../../components/prestasi-half/prestasi.component';

import './ruang-prestasi-page.styles.scss';

import { ReactComponent as RuangIllustration } from '../../assets/illustrations/gambarruangprestasi.svg';

const RuangPrestasi = () => {
  const [isCollapse, setCollapse] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = 'http://35.240.223.151:8003';
    fetch(`${url}/all-ruang-prestasi`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <article className="ruang-prestasi-page">
      <Header color="green" />
      <main>
        <section className="ruang-prestasi">
          <div className="ruang-prestasi__main">
            <h1
              className="heading-primary align-text-center"
              style={{ color: '#d7d872' }}
            >
              <span>
                Ruang <br /> Prestasi
              </span>
            </h1>
            <br />{' '}
            <h3 className="heading-tertiary" style={{ color: '#fff' }}>
              Kami sangat mengapresiasi setiap <br /> curahan dedikasi yang
              kalian berikan <br /> untuk Vokasi Universitas Indonesia.
            </h3>
          </div>
          <div className="ruang-prestasi__picture">
            <RuangIllustration />
          </div>
        </section>
        <section className={`prestasi ${isCollapse ? 'collapse' : null}`}>
          <Prestasi data={data} />
        </section>
        <div
          onClick={() => {
            setCollapse(!isCollapse);
          }}
          className="lihat-selengkapnya"
        >
          <span>{isCollapse ? 'SELENGKAPNYA' : 'SEMBUNYIKAN'}</span>
        </div>
      </main>
      <Footer />
    </article>
  );
};

export default RuangPrestasi;
