import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ProdiCard from '../../components/prodi-card/prodi-card';
import { ReactComponent as ProdiIllustration } from '../../assets/illustrations/barunih-01.svg';
import './info-prodi_page.styles.scss';
import prodi1 from '../../assets/icons/infoprodiurutan-01.svg';
import prodi2 from '../../assets/icons/infoprodiurutan-02.svg';
import prodi3 from '../../assets/icons/infoprodiurutan-03.svg';
import prodi4 from '../../assets/icons/infoprodiurutan-04.svg';
import prodi5 from '../../assets/icons/infoprodiurutan-05.svg';
import prodi6 from '../../assets/icons/infoprodiurutan-06.svg';
import prodi7 from '../../assets/icons/infoprodiurutan-07.svg';
import prodi8 from '../../assets/icons/infoprodiurutan-08.svg';
import prodi9 from '../../assets/icons/infoprodiurutan-09.svg';
import prodi10 from '../../assets/icons/infoprodiurutan-10.svg';
import prodi11 from '../../assets/icons/infoprodiurutan-11.svg';
import prodi12 from '../../assets/icons/infoprodiurutan-12.svg';
import prodi13 from '../../assets/icons/infoprodiurutan-13.svg';
import prodi14 from '../../assets/icons/infoprodiurutan-14.svg';
import prodi15 from '../../assets/icons/infoprodiurutan-15.svg';

const aMD = [
  {
    id: 1,
    title: 'Administrasi Asuransi & Aktuaria',
    svgUrl: prodi1
  },
  {
    id: 2,
    title: 'Administrasi Keuangan & Perbankan',
    svgUrl: prodi2
  },
  {
    id: 3,
    title: 'Administrasi Perkantoran',
    svgUrl: prodi3
  },
  {
    id: 4,
    title: 'Administrasi Perpajakan',
    svgUrl: prodi4
  },
  {
    id: 5,
    title: 'Administrasi Rumah Sakit',
    svgUrl: prodi5
  },
  {
    id: 6,
    title: 'Akuntansi',
    svgUrl: prodi6
  },
  {
    id: 7,
    title: 'Hubungan Masyarakat',
    svgUrl: prodi7
  },
  {
    id: 8,
    title: 'Penyiaran Multimedia',
    svgUrl: prodi8
  },
  {
    id: 9,
    title: 'Periklanan Kreatif',
    svgUrl: prodi9
  }
];

const sarjanaT = [
  {
    id: 1,
    title: 'Bisnis Kreatif',
    svgUrl: prodi10
  },
  {
    id: 2,
    title: 'Fisioterapi',
    svgUrl: prodi11
  },
  {
    id: 3,
    title: 'Manajemen Rekod & Arsip',
    svgUrl: prodi12
  },
  {
    id: 4,
    title: 'Okupansi Terapi',
    svgUrl: prodi13
  },
  {
    id: 5,
    title: 'Manajemen Bisnis Pariwisata',
    svgUrl: prodi14
  },
  {
    id: 6,
    title: 'Produksi Media',
    svgUrl: prodi15
  }
];

const ProdiPage = () => {
  return (
    <article className="info-prodi-page">
      <Header color="navy" />
      <main>
        <section className="info-prodi">
          <div className="info-prodi__picture">
            <ProdiIllustration />
          </div>
          <div className="info-prodi__main">
            <h1 style={{ color: '#395f7d' }}>
              <span>Info</span> <br /> Program Studi
            </h1>
          </div>
        </section>
        <div className="info-prodi__tambahan" />
        <section className="info-prodi-ahli-madya">
          <div className="info-prodi__cards">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-left mb-sm"
            >
              Ahli Madya Terapan
            </h1>
            <div className="prodi-card-container">
              {aMD.map(({ id, ...aMDProps }) => (
                <ProdiCard {...aMDProps} key={id} />
              ))}
            </div>
          </div>
        </section>
        <section className="info-prodi-sarjana-terapan">
          <div className="info-prodi__cards">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-left mb-sm"
            >
              Sarjana Terapan
            </h1>
            <div className="prodi-card-container">
              {sarjanaT.map(({ id, ...sarjanaTProps }) => (
                <ProdiCard {...sarjanaTProps} key={id} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </article>
  );
};

export default ProdiPage;
