import React, { useEffect, useState } from 'react';
import './data-publik-detail.styles.scss';

import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

const DataPublikDetail = () => {
  const { id } = useParams();
  const name = id.split('-').join(' ').toUpperCase();

  const [data, setData] = useState([]);

  console.log(data);

  useEffect(() => {
    const url = 'https://api.vokasiconnect.id';
    fetch(`${url}/all-portal-data`)
      .then((res) => res.json())
      .then((data) => {
        const filteredData = data.data.filter((val) => {
          if (val.category.name.toLowerCase() === 'kajian') {
            val.category.name = 'kajian strategis';
          }

          return val.category.name.toLowerCase() === name.toLowerCase();
        });

        setData(filteredData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [name]);

  return (
    <article className="data-publik-detail-page">
      <Header color="green" />
      <main>
        <section className="fake-header">
          <div className="button-header-container">
            <Link to="/data-publik/data-riset">
              <Button
                className={`btn--up-page ${
                  id === 'data-riset' ? 'active' : ''
                }`}
              >
                <h3 className="text">Data Riset</h3>
              </Button>
            </Link>
            <Link to="/data-publik/buletin">
              <Button
                className={`btn--up-page ${id === 'buletin' ? 'active' : ''}`}
              >
                <h3 className="text">Buletin</h3>
              </Button>
            </Link>
            <Link to="/data-publik/kajian-strategis">
              <Button
                className={`btn--up-page ${
                  id === 'kajian-strategis' ? 'active' : ''
                }`}
              >
                <h3 className="text">Kajian Strategis</h3>
              </Button>
            </Link>
            <Link to="/data-publik/uu-ikm-vokasi-ui">
              <Button
                className={`btn--up-page ${
                  id === 'uu-ikm-vokasi-ui' ? 'active' : ''
                }`}
              >
                <h3 className="text">UU IKM Vokasi UI</h3>
              </Button>
            </Link>
          </div>
        </section>
        <section className="data-publik-table-section">
          <div className="data-publik-table-title">
            <h1 className="heading-primary text-align-center">{name}</h1>
          </div>

          <div className="data-publik-container">
            <table className="data-publik-table">
              <thead>
                <tr className="data-publik-table__header">
                  <th>Judul</th>
                  <th>Pengunggah</th>
                  <th>Tanggal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((val) => (
                  <>
                    <tr>
                      <td>{val.title}</td>
                      <td>BEM Vokasi UI 2020</td>
                      <td>{val.tanggal}</td>
                      <td>download</td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
      <Footer />
    </article>
  );
};

export default DataPublikDetail;
