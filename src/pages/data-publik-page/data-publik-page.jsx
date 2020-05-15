import React from 'react';
import { Link } from 'react-router-dom';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Button from '../../components/button/button';

import { ReactComponent as Ilustrasi } from '../../assets/illustrations/gambardatapublik.svg';

import './data-publik.styles.scss';

const DataPublikPage = () => {
  return (
    <article className="data-publik-page">
      <Header color="green" />
      <main>
        <div className="up-page__heroes-text">
          <h1
            className="heading-primary text-align-center"
            style={{ color: 'white' }}
          >
            Portal Data Publik
          </h1>
        </div>
        <section className="up-page">
          <div className="up-page__picture">
            <Ilustrasi />
          </div>
          <div className="up-page__buttons">
            <div className="button-container">
              <Link to="/data-publik/data-riset">
                <Button className="btn--up-page">
                  <h3 className="text">Data Riset</h3>
                </Button>
              </Link>
              <Link to="/data-publik/buletin">
                <Button className="btn--up-page">
                  <h3 className="text">Buletin</h3>
                </Button>
              </Link>
              <Link to="/data-publik/kajian-strategis">
                <Button className="btn--up-page">
                  <h3 className="text">Kajian Strategis</h3>
                </Button>
              </Link>
              <Link to="/data-publik/uu-ikm-vokasi-ui">
                <Button className="btn--up-page">
                  <h3 className="text">UU IKM Vokasi UI</h3>
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <div className="tambahan" />
      </main>
      <Footer />
    </article>
  );
};

export default DataPublikPage;
