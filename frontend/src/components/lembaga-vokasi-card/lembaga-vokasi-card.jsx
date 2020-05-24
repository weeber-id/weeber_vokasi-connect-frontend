import React from 'react';
import { Link } from 'react-router-dom';

const LembagaVokasiCard = ({ nama, src, url }) => {
  return (
    <>
      <Link
        style={{ textDecoration: 'none' }}
        to={
          url === 'bem-vokasi-ui'
            ? '/profil-organisasi/visi-misi'
            : `/lembaga-vokasi-ui/${url}`
        }
      >
        <div className="lembaga-lembaga__card">
          <div className="lembaga-lembaga__img-container">
            <img
              src={require(`../../assets/logos/lembaga-vokasi/${src}`)}
              alt={`logo ${nama}`}
              className="lembaga-lembaga__img"
            />
          </div>
          <div className="lembaga-lembaga__nama-lembaga">
            <span>{nama}</span>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LembagaVokasiCard;
