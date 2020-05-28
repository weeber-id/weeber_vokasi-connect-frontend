import React, { useEffect, useState, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { ReactComponent as Logo } from '../../assets/icons/vokasi.svg';

const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
};

const MobileHeader = ({ hidden, setHidden }) => {
  const [collapse, setCollapse] = useState(true);
  const [profilCollapse, setProfilCollapse] = useState(true);

  const { pathname } = useLocation();

  let prevId = usePrevious(pathname);
  useEffect(() => {
    if (prevId && pathname !== prevId) {
      setProfilCollapse(true);
      setHidden(true);
      prevId = undefined;
    }
  }, [pathname]);

  useEffect(() => {
    document.addEventListener('touchstart', handleTouchStart, false);
    document.addEventListener('touchmove', handleTouchMove, false);

    let xDown = null;

    function getTouches(e) {
      return e.touches;
    }

    function handleTouchStart(e) {
      const firstTouch = getTouches(e)[0];
      xDown = firstTouch.clientX;
    }

    function handleTouchMove(e) {
      if (!xDown) {
        return;
      }

      let xUp = e.touches[0].clientX;
      let xDiff = xDown - xUp;

      if (xDiff > 0) {
        /* left swipe */
        if (!collapse) {
          setCollapse(true);
        } else if (!profilCollapse) {
          setProfilCollapse(true);
        } else {
          setHidden(true);
        }
      } else if (xDiff < 0 && xDown < 50) {
        /* right swipe */
        setHidden(false);
      }

      xDown = null;
    }

    return () => {
      document.removeEventListener('touchstart', handleTouchStart, false);
      document.removeEventListener('touchmove', handleTouchMove, false);
    };
  });

  return (
    <>
      {!hidden ? (
        <div
          onClick={() => {
            setHidden(true);
            setCollapse(true);
            setProfilCollapse(true);
          }}
          className="overlay"
        />
      ) : null}

      <nav className={`mobile-header ${hidden ? 'collapse' : ''}`}>
        <div className="mobile-header__brand">
          <Logo />
          <span className="mobile-header__label">Vokasi Connect</span>
        </div>
        <div className="mobile-header__items">
          <NavLink
            exact
            to="/"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Beranda</span>
          </NavLink>
          <NavLink
            to="/artikel"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Artikel</span>
          </NavLink>
          <NavLink
            to="/event"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Event</span>
          </NavLink>
          <NavLink
            to="/lembaga-vokasi-ui"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Lembaga Vokasi UI</span>
          </NavLink>
          <NavLink
            to="/data-publik"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Data Publik</span>
          </NavLink>
          <div
            className="mobile-header__link"
            onClick={() => {
              setProfilCollapse(false);
            }}
          >
            <span className="mobile-header__item">Profil BEM Vokasi UI</span>
          </div>
          <div
            className="mobile-header__link"
            onClick={() => {
              setCollapse(false);
            }}
          >
            <span className="mobile-header__item">Info Vokasi</span>
          </div>
        </div>
      </nav>

      <div className={`mobile-header ${collapse ? 'collapse' : ''}`}>
        <div className="mobile-header__brand">
          <div className="mobile-header__back-container">
            <div
              onClick={() => {
                setCollapse(true);
              }}
              className="mobile-header__back"
            />
          </div>
          <span className="mobile-header__label">Back</span>
        </div>
        <div className="mobile-header__items">
          <NavLink
            exact
            to="/info-vokasi/ruang-prestasi"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Ruang Prestasi</span>
          </NavLink>
          <NavLink
            to="/info-vokasi/info-prodi"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Info Prodi</span>
          </NavLink>
          <NavLink
            to="/info-vokasi/triumph-of-spartan"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Triumph of Spartan</span>
          </NavLink>
        </div>
      </div>

      <div className={`mobile-header ${profilCollapse ? 'collapse' : ''}`}>
        <div className="mobile-header__brand">
          <div className="mobile-header__back-container">
            <div
              onClick={() => {
                setProfilCollapse(true);
              }}
              className="mobile-header__back"
            />
          </div>
          <span className="mobile-header__label">Back</span>
        </div>
        <div className="mobile-header__items">
          <NavLink
            to="/profil-organisasi/visi-misi"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Visi & Misi</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/logo"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Logo</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/pengurus-inti"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Pengurus Inti</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/kesekretariatan"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Kesekretariatan</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/keuangan"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Keuangan</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/sosmaling"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Sospol</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/olahraga"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Kemahasiswaan</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/litbang"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">Internal</span>
          </NavLink>
          <NavLink
            to="/profil-organisasi/humas"
            className="mobile-header__link"
            activeClassName="active"
          >
            <span className="mobile-header__item">KKI</span>
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default MobileHeader;
