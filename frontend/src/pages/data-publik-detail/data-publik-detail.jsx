import React, { useEffect, useState } from 'react';
import './data-publik-detail.styles.scss';

import { Link, useParams } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

const DataPublikDetail = () => {
  const { id } = useParams();
  const defaultCategory =
    id === 'data-riset'
      ? 1
      : id === 'buletin'
      ? 2
      : id === 'kajian-strategis'
      ? 3
      : 4;
  const name = id.split('-').join(' ').toUpperCase();
  const [data, setData] = useState([]);
  const [category, setCategory] = useState(defaultCategory);

  useEffect(() => {
    const url = 'https://api.vokasiconnect.id';
    fetch(`${url}/portal-data?category_id=${category}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  const handleDownload = (url) => {
    window.open(url, '_blank');
  };

  return (
    <article className="data-publik-detail-page">
      <Header color="green" />
      <main>
        <section className="fake-header">
          <div className="button-header-container">
            <Link onClick={() => setCategory(1)} to="/data-publik/data-riset">
              <Button
                className={`btn--up-page ${
                  id === 'data-riset' ? 'active' : ''
                }`}
              >
                <h3 className="text">Data Riset</h3>
              </Button>
            </Link>
            <Link onClick={() => setCategory(2)} to="/data-publik/buletin">
              <Button
                className={`btn--up-page ${id === 'buletin' ? 'active' : ''}`}
              >
                <h3 className="text">Buletin</h3>
              </Button>
            </Link>
            <Link
              onClick={() => setCategory(3)}
              to="/data-publik/kajian-strategis"
            >
              <Button
                className={`btn--up-page ${
                  id === 'kajian-strategis' ? 'active' : ''
                }`}
              >
                <h3 className="text">Kajian Strategis</h3>
              </Button>
            </Link>
            <Link
              onClick={() => setCategory(4)}
              to="/data-publik/uu-ikm-vokasi-ui"
            >
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
                  <tr key={`data-${val.id}`}>
                    <td>{val.title}</td>
                    <td>BEM Vokasi UI 2020</td>
                    <td>{val.tanggal}</td>
                    <td
                      style={{ cursor: 'pointer' }}
                      onClick={() => {
                        handleDownload(val.link);
                      }}
                    >
                      download
                    </td>
                  </tr>
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
