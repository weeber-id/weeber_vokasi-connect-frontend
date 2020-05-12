import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { ReactComponent as LogoHero } from '../../assets/logos/logo-profil.svg';
import { ReactComponent as Wing } from '../../assets/logos/wing.svg';
import { ReactComponent as Bird } from '../../assets/logos/bird.svg';
import { ReactComponent as BirdColor } from '../../assets/logos/bird-color.svg';
import profilBem from '../../json/profil-bem.json';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import LogoCard from '../../components/logo-card/logo-card';

const BemVokasiPage = (props) => {
  const { id } = useParams();
  const profilBemFiltered = profilBem.filter((profil) => profil.id === id);
  const data = profilBemFiltered[0];

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
          <section className="profil-nav">
            <div className="profil-nav__previous">
              <span className="profil-nav__label">Next</span>
              <Link
                to="/profil-organisasi/visi-misi"
                className="profil-nav__link"
              >
                &lt;&nbsp; Visi dan Misi
              </Link>
            </div>

            <div className="profil-nav__next">
              <span className="profil-nav__label">Next</span>
              <Link
                to="/profil-organisasi/pengurus-inti"
                className="profil-nav__link"
              >
                Pengurus Inti &nbsp;&gt;
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (id === 'visi-misi') {
    return (
      <>
        <Header color="green" />
        <main className="visi-misi">
          <section className="visi">
            <span className="circle circle--white" />{' '}
            <span className="circle" />
            <h2 className="heading-secondary">VISI</h2>
            <p className="text">
              BEM Vokasi UI sebagai inkubator gagasan dan inisiator langkah
              sinergis demi mewujudkan kebermanfaatan yang nyata bagi Vokasi,
              UI, dan Indonesia.
            </p>
          </section>
          <section className="misi">
            <h2 className="heading-secondary">MISI</h2>
            <span className="circle" />{' '}
            <span className="circle circle--white" />
            <ol className="misi__items">
              <li className="misi__item">
                Membangun iklim internal organisasi yang suportif, dekat, dan
                apresiatif.
              </li>
              <li className="misi__item">
                Membangun potensi minat bakat dengan meningkatkan added value
                bagi mahasiswa.
              </li>
              <li className="misi__item">
                Menjalin relasi strategis dengan seluruh lembaga dan stakeholder
                BEM Vokasi UI demi terwujudnya sinergitas sivitas Vokasi UI.
              </li>
              <li className="misi__item">
                Membangun gerakan dengan melibatkan peran aktif mahasiswa dalam
                pengawalan isu sosial, politik, dan lingkungan.
              </li>
            </ol>
          </section>
        </main>
        <section className="profil-nav">
          <div />
          <div className="profil-nav__next">
            <span className="profil-nav__label">Next</span>
            <Link to="/profil-organisasi/logo" className="profil-nav__link">
              Logo &nbsp;&gt;
            </Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  if (id === 'pengurus-inti') {
    return (
      <>
        <Header />
        <main className="pi">
          <section className="profil__header">
            <div
              style={{
                backgroundImage: `url(${require(`../../assets/images/profil-bem/${data.hero}`)})`
              }}
              className="profil__hero"
            />
            <div className="profil__name">
              <h1
                style={{ color: 'white' }}
                className="heading-primary text-align-center"
              >
                {data.name}
              </h1>
            </div>
          </section>
          <div className="pi__ketua-wakil">
            {(function () {
              let orang = [];
              for (let i = 0; i < 2; i++) {
                orang.push(
                  <div className="profil-overview__orang">
                    <img
                      src={require(`../../assets/images/profil-bem/${data.pejabat[i].foto}`)}
                      alt=""
                      className="profil-overview__img"
                    />
                    <span className="profil-overview__nama-pejabat">
                      {data.pejabat[i].nama}
                    </span>
                    <span className="profil-overview__jabatan">
                      {data.pejabat[i].jabatan}
                    </span>
                    <span className="profil-overview__jurusan-pejabat">
                      {data.pejabat[i].jurusan}
                    </span>
                  </div>
                );
              }
              return orang;
            })()}
          </div>
          <div className="pi__ph">
            {(function () {
              let orang = [];
              for (let i = 2; i < data.pejabat.length; i++) {
                orang.push(
                  <div className="profil-overview__orang">
                    <img
                      src={require(`../../assets/images/profil-bem/${data.pejabat[i].foto}`)}
                      alt=""
                      className="profil-overview__img"
                    />
                    <span className="profil-overview__nama-pejabat">
                      {data.pejabat[i].nama}
                    </span>
                    <span className="profil-overview__jabatan">
                      {data.pejabat[i].jabatan}
                    </span>
                    <span className="profil-overview__jurusan-pejabat">
                      {data.pejabat[i].jurusan}
                    </span>
                  </div>
                );
              }
              return orang;
            })()}
          </div>
          <section className="profil-nav">
            <div className="profil-nav__previous">
              <span className="profil-nav__label">Previous</span>
              <Link
                to={`/profil-organisasi/${data.previous.link}`}
                className="profil-nav__link"
              >
                &lt;&nbsp; {data.previous.text}
              </Link>
            </div>
            <div className="profil-nav__next">
              <span className="profil-nav__label">Next</span>
              <Link
                to={`/profil-organisasi/${data.next.link}`}
                className="profil-nav__link"
              >
                {data.next.text} &nbsp;&gt;
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </>
    );
  }

  if (profilBemFiltered.length === 0) {
    return (
      <>
        <p>Page not Found</p>
        <Link to="/">Back To Home</Link>
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
              backgroundImage: `url(${require(`../../assets/images/profil-bem/${data.hero}`)})`
            }}
            className="profil__hero"
          />
          <div className="profil__name">
            <h1
              style={{ color: 'white' }}
              className="heading-primary text-align-center"
            >
              {data.name}
            </h1>
          </div>
        </section>
        <section className="profil-overview">
          <div className="profil-overview__description">
            <p className="text">{data.description}</p>
          </div>
          <div className="profil-overview__pejabat">
            {data.pejabat.map((orang) => (
              <div key={orang.nama} className="profil-overview__orang">
                <img
                  src={require(`../../assets/images/profil-bem/${orang.foto}`)}
                  alt=""
                  className="profil-overview__img"
                />
                <span className="profil-overview__nama-pejabat">
                  {orang.nama}
                </span>
                <span className="profil-overview__jabatan">
                  {orang.jabatan}
                </span>
                <span className="profil-overview__jurusan-pejabat">
                  {orang.jurusan}
                </span>
              </div>
            ))}
          </div>
          <div className="profil-overview__staff">
            <div className="profil-overview__container-staff">
              <h2 style={{ color: 'white' }} className="heading-secondary">
                STAFF
              </h2>
              <ol className="profil-overview__items">
                {data.staff.map((staff) => (
                  <li key={staff} className="profil-overview__item">
                    {staff}
                  </li>
                ))}
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
            {data.proker.map((proker) => (
              <div key={proker} className="proker__item">
                <span>{proker}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="profil-nav">
          <div className="profil-nav__previous">
            <span className="profil-nav__label">Previous</span>
            <Link
              to={`/profil-organisasi/${data.previous.link}`}
              className="profil-nav__link"
            >
              &lt;&nbsp; {data.previous.text}
            </Link>
          </div>
          <div className="profil-nav__next">
            {data.next.text.length === 0 ? null : (
              <>
                <span className="profil-nav__label">Next</span>
                <Link
                  to={`/profil-organisasi/${data.next.link}`}
                  className="profil-nav__link"
                >
                  {data.next.text} &nbsp;&gt;
                </Link>
              </>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default BemVokasiPage;
