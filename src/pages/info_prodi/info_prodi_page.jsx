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
    svgUrl: prodi1,
    linkUrl:
      'https://drive.google.com/file/d/1vF2eOcMYc4w1NwBxHNnUBsgXYDhSdI91/view?usp=sharing'
  },
  {
    id: 2,
    title: 'Administrasi Keuangan & Perbankan',
    svgUrl: prodi2,
    linkUrl:
      'https://drive.google.com/file/d/1bw5pRoj_6hpA5NE9O3SASpPPTBJR2PMS/view?usp=sharing'
  },
  {
    id: 3,
    title: 'Administrasi Perkantoran',
    svgUrl: prodi3,
    linkUrl:
      'https://drive.google.com/file/d/1ul9CQ9t0ot33PAtEoOool06nDAHaek78/view?usp=sharing'
  },
  {
    id: 4,
    title: 'Administrasi Perpajakan',
    svgUrl: prodi4,
    linkUrl:
      'https://drive.google.com/file/d/1sFm233l6B2S2YTWuvajgBlYUTJgnXATk/view?usp=sharing'
  },
  {
    id: 5,
    title: 'Administrasi Rumah Sakit',
    svgUrl: prodi5,
    linkUrl:
      'https://drive.google.com/file/d/1-7BMNroaZat1s5DhawpMR8RMz2XXWetU/view?usp=sharing'
  },
  {
    id: 6,
    title: 'Akuntansi',
    svgUrl: prodi6,
    linkUrl:
      'https://drive.google.com/file/d/1ITIzDvmAqzWhAMILVai6z56JsTq52jN7/view?usp=sharing'
  },
  {
    id: 7,
    title: 'Hubungan Masyarakat',
    svgUrl: prodi7,
    linkUrl:
      'https://drive.google.com/file/d/1m5Y4ssMuP7aXJblKz1wxoYN7l4Sjppai/view?usp=sharing'
  },
  {
    id: 8,
    title: 'Penyiaran Multimedia',
    svgUrl: prodi8,
    linkUrl:
      'https://drive.google.com/file/d/1oW6Ys0CF5YaaXeNAlkKmPdgVLw__g_6q/view?usp=sharing'
  },
  {
    id: 9,
    title: 'Periklanan Kreatif',
    svgUrl: prodi9,
    linkUrl:
      'https://drive.google.com/file/d/1HIutn39C486pF-2Sh0TOnBX32akAMlcq/view?usp=sharing'
  }
];

const sarjanaT = [
  {
    id: 1,
    title: 'Bisnis Kreatif',
    svgUrl: prodi10,
    linkUrl:
      'https://drive.google.com/file/d/1ybbTfDzPwAAB8I75CIG15Rrp3aa4cYD9/view?usp=sharing'
  },
  {
    id: 2,
    title: 'Fisioterapi',
    svgUrl: prodi11,
    linkUrl:
      'https://drive.google.com/file/d/1APJWDCG6My5Q2PW1NhK7MWQNJSn1m0h5/view?usp=sharing'
  },
  {
    id: 3,
    title: 'Manajemen Rekod & Arsip',
    svgUrl: prodi12,
    linkUrl:
      'https://drive.google.com/file/d/1YGbxz4Fy-z4udJ3HOn2i8S9PvAQ_NNcS/view?usp=sharing'
  },
  {
    id: 4,
    title: 'Okupansi Terapi',
    svgUrl: prodi13,
    linkUrl:
      'https://drive.google.com/file/d/12vWN31YU-lIQglVa0LIQaycvJl5DiOgj/view?usp=sharing'
  },
  {
    id: 5,
    title: 'Manajemen Bisnis Pariwisata',
    svgUrl: prodi14,
    linkUrl:
      'https://drive.google.com/file/d/1GeNz3vZoHWUb7GqlpJyfVIDL4xDw5-hE/view?usp=sharing'
  },
  {
    id: 6,
    title: 'Produksi Media',
    svgUrl: prodi15,
    linkUrl:
      'https://drive.google.com/file/d/1H1_w3IGIIRo7-6D9QrLcXZe_QppTyaVD/view?usp=sharing'
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
            <h1 style={{ color: '#395f7d' }} className="heading-primary">
              <span>Info </span>
              <br />
              Program Studi
            </h1>
          </div>
        </section>
        <div className="info-prodi__tambahan" />
        <section className="info-prodi-ahli-madya">
          <div className="info-prodi__cards">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-center mb-sm"
            >
              Ahli Madya Terapan
            </h1>
            <div className="prodi-card-container">
              {aMD.map(({ id, title, svgUrl, linkUrl }) => (
                <ProdiCard
                  id={id}
                  title={title}
                  svgUrl={svgUrl}
                  linkUrl={linkUrl}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="info-prodi-sarjana-terapan">
          <div className="info-prodi__cards">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-center mb-sm"
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
