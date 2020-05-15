import React from 'react';
import './prestasi-half.styles.scss';

const Prestasi = () => {
  return (
    <div className="ruang-prestasi__table">
      <h1
        className="heading-secondary text-align-left"
        style={{ color: 'var(--color-yellow-2)' }}
      >
        Daftar Prestasi
      </h1>
      <table>
        <tr className="ruang-prestasi-title">
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
  );
};

export default Prestasi;
