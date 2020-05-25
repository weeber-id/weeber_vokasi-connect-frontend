import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import MobileHeader from './mobile-header';
import { ReactComponent as Logo } from '../../assets/logos/logo.svg';

const HeaderDropdown = ({ type }) => {
  if (type === 'info-vokasi') {
    return (
      <div className="profil-dropdown">
        <Link
          className="profil-dropdown__link"
          to="/info-vokasi/ruang-prestasi"
        >
          <span className="profil-dropdown__item">Ruang Prestasi</span>
        </Link>
        <Link className="profil-dropdown__link" to="/info-vokasi/info-prodi">
          <span className="profil-dropdown__item">Info Prodi</span>
        </Link>
        <Link
          className="profil-dropdown__link"
          to="/info-vokasi/triumph-of-spartan"
        >
          <span className="profil-dropdown__item">Triumph of Spartans</span>
        </Link>
      </div>
    );
  }

  return (
    <div className="profil-dropdown">
      <Link className="profil-dropdown__link" to="/profil-organisasi/visi-misi">
        <span className="profil-dropdown__item">Visi dan Misi</span>
      </Link>
      <Link className="profil-dropdown__link" to="/profil-organisasi/logo">
        <span className="profil-dropdown__item">Logo</span>
      </Link>
      <Link
        className="profil-dropdown__link"
        to="/profil-organisasi/pengurus-inti"
      >
        <span className="profil-dropdown__item">Pengurus Inti</span>
      </Link>
      <Link className="profil-dropdown__link" to="/profil-organisasi/keuangan">
        <span className="profil-dropdown__item">Keuangan</span>
      </Link>
      <Link
        className="profil-dropdown__link"
        to="/profil-organisasi/kesekretariatan"
      >
        <span className="profil-dropdown__item">Kesekretariatan</span>
      </Link>
      <span className="profil-dropdown__link profil-dropdown__link--hover">
        <Link
          className="profil-dropdown__link"
          to="/profil-organisasi/sosmaling"
        >
          <span className="profil-dropdown__item">Sospol</span>

          {/* sub dropdown menu sospol */}
        </Link>
        <div className="sub-dropdown">
          <Link
            className="sub-dropdown__link"
            to="/profil-organisasi/sosmaling"
          >
            <span className="profil-dropdown__item">Sosmaling</span>
          </Link>
          <Link className="sub-dropdown__link" to="/profil-organisasi/adkesma">
            <span className="profil-dropdown__item">Adkesma</span>
          </Link>
          <Link className="sub-dropdown__link" to="/profil-organisasi/kastrat">
            <span className="profil-dropdown__item">Kastrat</span>
          </Link>
        </div>
      </span>
      <span className="profil-dropdown__link profil-dropdown__link--hover">
        <Link
          className="profil-dropdown__link"
          to="/profil-organisasi/olahraga"
        >
          <span className="profil-dropdown__item">Kemahasiswaan</span>
        </Link>
        <div className="sub-dropdown">
          <Link className="sub-dropdown__link" to="/profil-organisasi/olahraga">
            <span className="profil-dropdown__item">Olahraga</span>
          </Link>
          <Link className="sub-dropdown__link" to="/profil-organisasi/senbud">
            <span className="profil-dropdown__item">Seni Budaya</span>
          </Link>
          <Link className="sub-dropdown__link" to="/profil-organisasi/p&k">
            <span className="profil-dropdown__item">
              Pendidikan & Keilmuwan
            </span>
          </Link>
          <Link
            className="sub-dropdown__link"
            to="/profil-organisasi/profil-organisasi/pemkar"
          >
            <span className="profil-dropdown__item">Pengembangan Karir</span>
          </Link>
        </div>
      </span>
      <span className="profil-dropdown__link profil-dropdown__link--hover">
        <Link className="profil-dropdown__link" to="/profil-organisasi/litbang">
          <span className="profil-dropdown__item">Internal</span>
        </Link>
        <div className="sub-dropdown">
          <Link className="sub-dropdown__link" to="/profil-organisasi/litbang">
            <span className="profil-dropdown__item">Litbang</span>
          </Link>
          <Link className="sub-dropdown__link" to="/profil-organisasi/psdm">
            <span className="profil-dropdown__item">PSDM</span>
          </Link>
        </div>
      </span>
      <span className="profil-dropdown__link profil-dropdown__link--hover">
        <Link className="profil-dropdown__link" to="/profil-organisasi/humas">
          <span className="profil-dropdown__item">KKI</span>
        </Link>
        <div className="sub-dropdown">
          <Link className="sub-dropdown__link" to="/profil-organisasi/humas">
            <span className="profil-dropdown__item">Humas</span>
          </Link>
          <Link className="sub-dropdown__link" to="/profil-organisasi/dkv">
            <span className="profil-dropdown__item">DKV</span>
          </Link>
        </div>
      </span>
    </div>
  );
};

const Header = ({ className = '', color }) => {
  const [profilHidden, setProfilHidden] = useState(true);
  const [hiddenInfo, setHiddenInfo] = useState(true);
  const [isHidden, setHidden] = useState(true);

  const headerClass = ['header'];

  if (color === 'navy') headerClass.push('header--navy');
  if (color === 'green') headerClass.push('header--green');
  if (color === 'yellow') headerClass.push('header--yellow');
  if (color === 'tos') headerClass.push('header--tos');
  if (color === 'yellow-light') headerClass.push('header--yellow-light');
  if (color === 'navy-2') headerClass.push('header--navy-2');
  if (className.length > 0) headerClass.push(className);

  return (
    <header>
      <div className="hamburger__container">
        <div
          onClick={() => {
            setHidden(false);
          }}
          className="hamburger"
        />
      </div>
      <MobileHeader hidden={isHidden} setHidden={setHidden} />
      <nav className={headerClass.join(' ')}>
        <div className="header__logo">
          <Link to="/">
            <Logo fill="white" height="8rem" width="8rem" />
          </Link>
        </div>
        <div className="header__items">
          <Link className="header__item" to="/">
            <span>Beranda</span>
          </Link>
          <Link className="header__item" to="/artikel">
            <span>Artikel</span>
          </Link>
          <Link className="header__item" to="/event">
            <span>Event</span>
          </Link>
          <Link className="header__item" to="/lembaga-vokasi-ui">
            <span>Lembaga Vokasi UI</span>
          </Link>
          <Link className="header__item" to="/data-publik">
            <span>Data Publik</span>
          </Link>
          <span
            onMouseOver={() => {
              setProfilHidden(false);
            }}
            onMouseLeave={() => {
              setProfilHidden(true);
            }}
            className="header__item"
          >
            <Link
              style={{ marginRight: 0 }}
              className="header__item"
              to="/profil-organisasi/visi-misi"
            >
              <span>Profil BEM Vokasi UI</span>
            </Link>
            {profilHidden ? null : <HeaderDropdown />}
          </span>
          <span
            onMouseOver={() => {
              setHiddenInfo(false);
            }}
            onMouseLeave={() => {
              setHiddenInfo(true);
            }}
            className="header__item"
          >
            <Link
              style={{ marginRight: 0 }}
              className="header__item"
              to="/info-vokasi/ruang-prestasi"
            >
              <span>Info Vokasi</span>
            </Link>
            {hiddenInfo ? null : <HeaderDropdown type="info-vokasi" />}
          </span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
