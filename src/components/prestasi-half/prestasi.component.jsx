import React from 'react';
import './prestasi-half.styles.scss';

const Prestasi = () => {
  return (
    <div className="ruang-prestasi-container">
      <h1
        className="heading-primary text-align-left"
        style={{ color: 'var(--color-yellow-2)' }}
      >
        Ruang Prestasi
      </h1>
      <div className="ruang-prestasi__table">
        <table>
          <tr>
            <th>Nama</th>
            <th>Jurusan</th>
            <th>Angkatan</th>
            <th>Prestasi</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Aktuaria</td>
            <td>2019</td>
            <td>Juara 1 Memancing Keributan 2020</td>
          </tr>
          <tr>
            <td>Centro comercial </td>
            <td>Adm. Rumah Sakit</td>
            <td>2019</td>
            <td>Juara 1 Memancing Keributan 2020</td>
          </tr>
          <tr>
            <td>Ernst Handel</td>
            <td>Adm. Rumah Sakit</td>
            <td>2017</td>
            <td>Juara 1 Memancing Keributan 2020</td>
          </tr>
          <tr>
            <td>Island Trading</td>
            <td>Akuntansi</td>
            <td>2018</td>
            <td>Juara 1 Memancing Keributan 2020</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Prestasi;
