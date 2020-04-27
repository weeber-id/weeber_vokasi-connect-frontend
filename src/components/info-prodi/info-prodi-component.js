import React from 'react';
import CardProdi from './info-prodi-card';

const ahliMadyaTerapan = [
    {
      id: 1,
      title: 'Administrasi Asuransi & Aktuaria',
      svgUrl: ''
      
    },
    {
        id: 2,
        title: 'Administrasi Keuangan & Perbankan',
        svgUrl: ''
        
      },
      {
        id: 3,
        title: 'Administrasi Perkantoran',
        svgUrl: ''
      },
      {
        id: 4,
        title: 'Administrasi Perpajakan',
        svgUrl: ''
      }
      ,
      {
        id: 5,
        title: 'Administrasi Rumah Sakit',
        svgUrl: ''
      }
      ,
      {
        id: 6,
        title: 'Akuntansi',
        svgUrl: ''
      }
      ,
      {
        id: 7,
        title: 'Hubungan Masyarakat',
        svgUrl: ''
      }
      ,
      {
        id: 8,
        title: 'Penyiaran Multimedia',
        svgUrl: ''
      }
      ,
      {
        id: 9,
        title: 'Periklanan Kreatif',
        svgUrl: ''
      }
    
  ];

  const sarjanaTerapan = [
    {
      id: 1,
      title: 'Bisnis Kreatif',
      svgUrl: ''
      
    },
    {
        id: 2,
        title: 'Fisioterapi',
        svgUrl: ''
        
      },
      {
        id: 3,
        title: 'Manajemen Rekod & Arsip',
        svgUrl: ''
      },
      {
        id: 4,
        title: 'Okupansi Terapi',
        svgUrl: ''
      }
      ,
      {
        id: 5,
        title: 'Manajemen BIsnis Pariwisata',
        svgUrl: ''
      }
      ,
      {
        id: 6,
        title: 'Produksi Media',
        svgUrl: ''
      }
      
    
  ];

  const ProdiFull = () => {
    return(
        <div>
            <h1>Ahli Madya Terapan</h1>
        <div>
         {ahliMadyaTerapan.map(({id, ...ahliMadyaTerapanProps}) => (
          <CardProdi {...ahliMadyaTerapanProps} key={id}  />
        ))}
        </div>
        <h1>Sarjana Terapan</h1>
        <div>
         {sarjanaTerapan.map(({id, ...sarjanaTerapanProps}) => (
          <CardProdi {...sarjanaTerapanProps} key={id}  />
        ))}
        </div>
        
        </div>
    );
  };

  export default ProdiFull;