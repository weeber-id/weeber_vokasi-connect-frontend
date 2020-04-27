import React from 'react';

import { ReactComponent as LogoFooter } from '../../assets/logos/logobemfooter.svg';
import { ReactComponent as Instagram } from '../../assets/icons/instagram.svg';
import { ReactComponent as Line } from '../../assets/icons/line.svg';
import { ReactComponent as Twitter } from '../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <div className="footer__logo">
          <LogoFooter height="10rem" width="10rem" />
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
          {/* <Instagram height="5rem" width="5rem" />
          <Line />
          <Twitter /> */}
        </div>
        <p className="text">&copy; 2020 Made by Love</p>
        <p className="text">Biro Desain Komunikasi Visual BEM Vokasi UI 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
