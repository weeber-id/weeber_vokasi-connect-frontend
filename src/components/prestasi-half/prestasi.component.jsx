import React from 'react';
import './prestasi-half.styles.scss';

const Prestasi = ({ data }) => {
  return (
    <div className="prestasi">
      <h1
        className="heading-secondary text-align-left"
        style={{ color: 'var(--color-yellow-2)' }}
      >
        Daftar Prestasi
      </h1>
      <table className="ruang-prestasi__table">
        <thead>
          <tr className="ruang-prestasi-title">
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Angkatan</th>
            <th>Prestasi</th>
          </tr>
        </thead>
        <tbody>
          {!data ? (
            <span>Loading</span>
          ) : (
            data.map((val) => (
              <tr key={val.id}>
                <td>{val.nama}</td>
                <td>{val.jurusan}</td>
                <td>{val.angkatan}</td>
                <td>{val.prestasi}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Prestasi;
