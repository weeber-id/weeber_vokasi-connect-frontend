import React from 'react';
// import { useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

const LembagaVokasiDetailPage = () => {
  // const { id } = useParams();
  return (
    <>
      <Header color="navy" />
      <main className="lembaga-detail">
        <section className="lembaga-detail__heroes">
          <img
            alt="logo"
            src={require('../../assets/logos/lembaga-vokasi/hmrk-ui.jpg')}
            className="lembaga-detail__logo"
          />
          <div className="lembaga-detail__caption">
            <h1 className="lembaga-detail__name">HMRK UI</h1>
            <h2 className="lembaga-detail__tagline">Bergerak Berkontribusi</h2>
          </div>
        </section>

        <section className="lembaga-detail__overview">
          <p className="text text-align-center">
            Himpunan Mahasiswa Rumpun Kesehatan (HMRK) Vokasi UI adalah
            organisasi mahasiswa vokasi rumpun kesehatan yang terdiri dari tiga
            program studi, yaitu Administrasi Rumah Sakit, Fisioterapi, dan
            Okupasi Terapi yang dijadikan sebagai wadah komunikasi antar
            mahasiswa.
          </p>
          <div className="petinggi__container">
            <div className="petinggi">
              <img
                src={require('../../assets/images/lembaga-vokasi/hmrk-1.PNG')}
                alt="petinggi"
                className="petinggi__img"
              />
              <div className="petinggi__identitas">
                <h3 className="petinggi__nama">
                  Siapapun dia <br /> Jabatannya
                </h3>
                <h4 className="petinggi__jurusan">Rumpun Kesehatan 2018</h4>
              </div>
            </div>
          </div>
        </section>

        <section className="pengurus">
          <div className="pengurus__ph">
            <h5 className="pengurus__jabatan">Ketua Himpunan</h5>
            <h6 className="pengurus__nama">Mufighani Robbiansyah S</h6>
          </div>
          <div className="pengurus__departements">
            <div className="pengurus__departement">
              <h3
                style={{
                  backgroundColor: 'white',
                  color: 'var(--color-navy-1)',
                  width: 'max-content',
                  padding: '0rem 1rem'
                }}
                className="heading-tertiary"
              >
                NAMA DEPARTEMEN
              </h3>
              <div className="pengurus__pejabat">
                <h5 className="pengurus__jabatan">Ketua Departemen</h5>
                <h6 className="pengurus__nama">Kania Yosefin</h6>
              </div>
              <div className="pengurus__staffs">
                <h5 className="pengurus__jabatan">Staff :</h5>
                <h6 className="pengurus__nama">Staff namanya siapa 1</h6>
                <h6 className="pengurus__nama">Staff namanya siapa 2</h6>
                <h6 className="pengurus__nama">Staff namanya siapa 3</h6>
              </div>
            </div>
            <div className="pengurus__departement">
              <h3
                style={{
                  backgroundColor: 'white',
                  color: 'var(--color-navy-1)',
                  width: 'max-content',
                  padding: '0rem 1rem'
                }}
                className="heading-tertiary"
              >
                NAMA DEPARTEMEN
              </h3>
              <div className="pengurus__pejabat">
                <h5 className="pengurus__jabatan">Ketua Departemen</h5>
                <h6 className="pengurus__nama">Kania Yosefin</h6>
              </div>
              <div className="pengurus__staffs">
                <h5 className="pengurus__jabatan">Staff :</h5>
                <h6 className="pengurus__nama">Staff namanya siapa 1</h6>
                <h6 className="pengurus__nama">Staff namanya siapa 2</h6>
                <h6 className="pengurus__nama">Staff namanya siapa 3</h6>
              </div>
            </div>
            <div className="pengurus__departement">
              <h3
                style={{
                  backgroundColor: 'white',
                  color: 'var(--color-navy-1)',
                  width: 'max-content',
                  padding: '0rem 1rem'
                }}
                className="heading-tertiary"
              >
                NAMA DEPARTEMEN
              </h3>
              <div className="pengurus__pejabat">
                <h5 className="pengurus__jabatan">Ketua Departemen</h5>
                <h6 className="pengurus__nama">Kania Yosefin</h6>
              </div>
              <div className="pengurus__staffs">
                <h5 className="pengurus__jabatan">Staff :</h5>
                <h6 className="pengurus__nama">Staff namanya siapa 1</h6>
                <h6 className="pengurus__nama">Staff namanya siapa 2</h6>
                <h6 className="pengurus__nama">Staff namanya siapa 3</h6>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LembagaVokasiDetailPage;
