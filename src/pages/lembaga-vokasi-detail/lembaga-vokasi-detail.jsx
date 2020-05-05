import React from 'react';
import { Link, useParams } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import lembaga from '../../json/lembaga-vokasi.json';

const LembagaVokasiDetailPage = () => {
  const { id } = useParams();

  const lembagaFiltered = lembaga.filter((val) => val.id === id);
  const data = lembagaFiltered[0];

  console.log(data);

  if (lembagaFiltered.length === 0) {
    return (
      <>
        <p>Page not FOund</p>
        <Link to="/">Back To Home</Link>
      </>
    );
  }

  return (
    <>
      <Header color="navy" />
      <main className="lembaga-detail">
        <section className="lembaga-detail__heroes">
          <img
            alt="logo"
            src={require(`../../assets/logos/lembaga-vokasi/${data.logo}`)}
            className="lembaga-detail__logo"
          />
          <div className="lembaga-detail__caption">
            <h1 className="lembaga-detail__name">{data.nama}</h1>
            <h2 className="lembaga-detail__tagline">{data.tagline}</h2>
          </div>
        </section>

        <section className="lembaga-detail__overview">
          <p
            dangerouslySetInnerHTML={{ __html: data.overview }}
            className="text text-align-center"
          ></p>
          <div className="petinggi__container">
            {data.petinggi.map((orang) => (
              <div key={orang.nama} className="petinggi">
                <img
                  src={require(`../../assets/images/lembaga-vokasi/${orang.foto}`)}
                  alt="petinggi"
                  className="petinggi__img"
                />
                <div className="petinggi__identitas">
                  <h3 className="petinggi__nama">
                    {orang.nama} <br /> {orang.jabatan}
                  </h3>
                  <h4 className="petinggi__jurusan">{orang.jurusan}</h4>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="pengurus">
          <h1 className="heading-primary text-align-center mb-sm">
            {data.sub_nama}
          </h1>
          <div className="pengurus__ph">
            {data.ph.map((orang) => (
              <div key={orang.nama}>
                <h5 className="pengurus__jabatan">{orang.jabatan}</h5>
                <h6 className="pengurus__nama mb-xs">{orang.nama}</h6>
              </div>
            ))}
          </div>
          <div className="pengurus__departements">
            {data.departments.map((department) => (
              <div key={department.nama} className="pengurus__departement">
                <h3
                  style={{
                    backgroundColor: 'white',
                    color: 'var(--color-navy-1)',
                    width: 'max-content',
                    padding: '0rem 1rem',
                    margin: '0 auto'
                  }}
                  className="heading-tertiary"
                >
                  {department.nama}
                </h3>
                <div className="pengurus__pejabat">
                  {department.petinggi.map((orang) => (
                    <div key={orang.nama}>
                      <h5 className="pengurus__jabatan">{orang.jabatan}</h5>
                      <h6 className="pengurus__nama mb-sm">{orang.nama}</h6>
                    </div>
                  ))}
                </div>
                <div className="pengurus__staffs">
                  {id === 'imperatif-ui' || id === 'hmpm-ui' ? null : (
                    <h5 className="pengurus__jabatan">Staff :</h5>
                  )}

                  {department.staff.map((nama) => (
                    <h6 key={nama} className="pengurus__nama">
                      {nama}
                    </h6>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LembagaVokasiDetailPage;
