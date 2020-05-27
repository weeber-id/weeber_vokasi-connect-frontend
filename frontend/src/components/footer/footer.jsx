import React from 'react';

import { ReactComponent as LogoFooter } from '../../assets/logos/logobemfooter-01.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Line } from '../../assets/icons/line.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';
import { ReactComponent as Weeber } from '../../assets/icons/logoweeber-01.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__logo">
          <LogoFooter height="20rem" width="20rem" />
        </div>
        <p className="footer__description">
          Kami percaya bahwa semua mahasiswa memiliki kesempatan yang sama untuk
          mengaktualisasi setiap potensi dan bakat yang dimiliki.Kami hadir
          sebagai inkubator gagasan sekaligus inisiator untuk Menciptakan
          kebermanfaatan bagi Vokasi, UI, dan Indonesia
        </p>
      </div>
      <div className="footer__right">
        <div className="footer__socmed">
          <a
            className="footer__socmed-icon"
            href="https://instagram.com/bemvokasiui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram height="3rem" width="3rem" />
          </a>
          <a
            className="footer__socmed-icon"
            target="_blank"
            rel="noopener noreferrer"
            href="https://lin.ee/l9SQeDU"
          >
            <Line height="3rem" width="3rem" />
          </a>
          <a
            href="https://twitter.com/bemvokasi_ui"
            className="footer__socmed-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter height="3rem" width="3rem" />
          </a>
          <a
            href="https://weeber.id"
            className="footer__socmed-icon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Weeber height="3rem" width="3rem" />
          </a>
        </div>
        <div>
          <p className="text">&copy; 2020 Made by Love</p>
          <p className="text">
            Biro Desain Komunikasi Visual <br /> BEM Vokasi UI 2020
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
