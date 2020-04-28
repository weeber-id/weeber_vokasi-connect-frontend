import React from 'react';

import { ReactComponent as LogoFooter } from '../../assets/logos/logobemfooter-01.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Line } from '../../assets/icons/line.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

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
            href="https://instagram.com/vokasi_ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram height="3rem" width="3rem" />
          </a>
          <a
            className="footer__socmed-icon"
            href="https://instagram.com/vokasi_ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Line height="3rem" width="3rem" />
          </a>
          <a
            className="footer__socmed-icon"
            href="https://instagram.com/vokasi_ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter height="3rem" width="3rem" />
          </a>
        </div>
        <p className="text">&copy; 2020 Made by Love</p>
        <p className="text">Biro Desain Komunikasi Visual BEM Vokasi UI 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
