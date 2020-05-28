import React, { useState, useRef } from 'react';

import './homepage.styles.scss';

import Header from '../../components/header/header';
import Button from '../../components/button/button';
import Footer from '../../components/footer/footer';
import InputForm from '../../components/input-form/input-form';

import { ReactComponent as Beranda1 } from '../../assets/illustrations/beranda1.svg';
import { ReactComponent as Beranda2 } from '../../assets/illustrations/beranda2.svg';
import { ReactComponent as Akademik } from '../../assets/icons/akademik.svg';
import { ReactComponent as Fasilitas } from '../../assets/icons/fasilitas.svg';
import { ReactComponent as Finansial } from '../../assets/icons/finansial.svg';
import { ReactComponent as KekerasanSeksual } from '../../assets/icons/kekerasanseksual-01.svg';
import { ReactComponent as KesehatanMental } from '../../assets/icons/kesehatanmental-01.svg';
import Loading from 'components/loading';

const HomePage = () => {
  const [state, setState] = useState({
    nama: '',
    npm: '',
    prodi: '',
    hp: '',
    keluhan: ''
  });

  const [isLoading, setLoading] = useState(false);

  const { nama, npm, prodi, hp, keluhan } = state;
  const aspirasiRef = useRef(null);

  const handleChange = (event) => {
    const { value, name } = event.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleClick = () => {
    window.scrollTo({
      top: aspirasiRef.current.scrollHeight - 50,
      behavior: 'smooth'
    });
  };

  const submitForm = () => {
    const url = 'https://api.vokasiconnect.id';

    const body = JSON.stringify({
      nama,
      npm,
      prodi,
      no_hp: hp,
      keluhan
    });
    setLoading(true);
    fetch(`${url}/aspiration`, {
      method: 'POST',
      body,
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        alert(
          'Aspirasi kamu sudah masuk ke database kami, terimakasih telah berpartisipasi :)'
        );
        setState({
          nama: '',
          npm: '',
          prodi: '',
          hp: '',
          keluhan: ''
        });
      })
      .catch((err) => {
        alert('opps terjadi kesalahan, mohon tunggu sebentar dan coba lagi :)');
        setLoading(false);
        setState({
          nama: '',
          npm: '',
          prodi: '',
          hp: '',
          keluhan: ''
        });
      });
  };

  return (
    <article className="homepage">
      <Header />
      {isLoading ? <Loading /> : null}

      {/* Section Heroes */}
      <main>
        <section className="heroes">
          <div className="heroes__welcome">
            <h1 className="heading-primary">
              <span style={{ color: 'white' }}>
                Selamat datang!
                <br />
                Mari berjejaring bersama di
                <br />
              </span>
              <span>Vokasi Connect</span>
            </h1>
            <Button onClick={handleClick} className="mt-sm">
              Telusuri Lebih Jauh
            </Button>
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
                IKM VOKASI ASPIRATION CENTER merupakan platform aspirasi
                mahasiswa Vokasi UI yang melayani pengaduan kesejahteraan
                mahasiswa. Aspirasi yang terkirim nantinya akan ditindaklanjuti
                melalui advokasi kepada pihak-pihak yang terkait.
                <br /> <br />
                Beberapa hal yang bisa kalian sampaikan,
              </p>
              <div className="aspirasi__items">
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
                <div className="aspirasi__item">
                  <KekerasanSeksual className="aspirasi__icon" />
                  <span>Kekerasan Seksual</span>
                </div>
                <div className="aspirasi__item">
                  <KesehatanMental className="aspirasi__icon" />
                  <span>Kesehatan Mental</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Aspiration Form */}

        <section ref={aspirasiRef} className="form-aspirasi">
          <h1
            style={{ color: 'white' }}
            className="heading-primary text-align-center mb-sm"
          >
            IKM VOKASI ASPIRATION CENTER
          </h1>
          <form onSubmit={submitForm} className="form-aspirasi__container">
            <InputForm
              value={nama}
              onChange={handleChange}
              className="form-aspirasi__form"
              type="text"
              name="nama"
              placeholder="Nama"
              required={true}
            />
            <InputForm
              value={npm}
              onChange={handleChange}
              className="form-aspirasi__form"
              type="text"
              name="npm"
              placeholder="NPM"
              required={true}
            />
            <InputForm
              value={prodi}
              onChange={handleChange}
              className="form-aspirasi__form"
              type="text"
              name="prodi"
              placeholder="Program Studi"
              required={true}
            />
            <InputForm
              value={hp}
              onChange={handleChange}
              className="form-aspirasi__form"
              type="tel"
              name="hp"
              placeholder="No.Hp"
              required={true}
            />
            <InputForm
              value={keluhan}
              onChange={handleChange}
              className="form-aspirasi__form"
              type="textarea"
              name="keluhan"
              placeholder="Tulis keluhanmu disini"
              required={true}
            />
          </form>
          <div className="kurung">
            <Button onClick={submitForm}>KIRIM</Button>
          </div>
        </section>
      </main>
      <Footer />
    </article>
  );
};

export default HomePage;
