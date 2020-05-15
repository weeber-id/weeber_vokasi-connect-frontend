import React from 'react';
import './data-publik-detail.styles.scss';

import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

const DataPublikDetail = () => {
  return (
    <article className="data-publik-detail-page">
      <Header color="green" />
      <main>
        <section className="fake-header">
          <div className="button-header-container">
            <Link to="/data-publik/data-riset">
              <Button>
                <h3 className="text">Data Riset</h3>
              </Button>
            </Link>
            <Link to="/data-publik/buletin">
              <Button>
                <h3 className="text">Buletin</h3>
              </Button>
            </Link>
            <Link to="/data-publik/kajian-strategis">
              <Button>
                <h3 className="text">Kajian Strategis</h3>
              </Button>
            </Link>
            <Link to="/data-publik/uu-ikm-vokasi-ui">
              <Button>
                <h3 className="text">UU IKM Vokasi UI</h3>
              </Button>
            </Link>
          </div>
        </section>
        <section className="data-publik-table-section">
          <div className="data-publik-table-title">
            <h1 className="heading-primary text-align-center">Data Riset</h1>
          </div>

          <div className="data-publik-container">
            <table className="data-publik-table">
              <tr className="data-publik-table__header">
                <th>Judul</th>
                <th>Pengunggah</th>
                <th>Tanggal</th>
                <th> </th>
              </tr>
              <tbody>
                <tr>
                  <td>Quo Vadis Pendidikan Vokasi di Indonesia</td>
                  <td>BEM Vokasi UI 2020</td>
                  <td>01/01/2020</td>
                  <td>download</td>
                </tr>
                <tr>
                  <td>Quo Vadis Pendidikan Vokasi di Indonesia</td>
                  <td>BEM Vokasi UI 2020</td>
                  <td>01/01/2020</td>
                  <td>download</td>
                </tr>
                <tr>
                  <td>Quo Vadis Pendidikan Vokasi di Indonesia</td>
                  <td>BEM Vokasi UI 2020</td>
                  <td>01/01/2020</td>
                  <td>download</td>
                </tr>
                <tr>
                  <td>Quo Vadis Pendidikan Vokasi di Indonesia</td>
                  <td>BEM Vokasi UI 2020</td>
                  <td>01/01/2020</td>
                  <td>download</td>
                </tr>
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
