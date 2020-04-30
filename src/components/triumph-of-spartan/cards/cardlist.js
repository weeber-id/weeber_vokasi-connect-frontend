import React from 'react';
import Card from './Card';

import gbrParade from '../../../assets/info-vokasi/triumph-of-spartan/Parade.JPG';
import gbrOLIM from '../../../assets/info-vokasi/triumph-of-spartan/Olim UI.jpg';
import gbrUIAW from '../../../assets/info-vokasi/triumph-of-spartan/UI Art War.jpg';
import gbrOIM from '../../../assets/info-vokasi/triumph-of-spartan/OIM UI.jpg';

const lomba = [
  {
    id: 1,
    event: 'Parade',
    desc: 'Pembukaan event Pesta Rakyat UI (OLIM, OIM, UI Art War)',
    picture: gbrParade
  },
  {
      id: 2,
      event: 'OLIM UI',
      desc: 'Kompetisi Mahasiswa UI di bidang Olahraga',
      picture: gbrOLIM
    },
    {
      id: 3,
      event: 'UI Art War',
      desc: 'Kompetisi mahasiswa UI di bidang Seni Budaya',
      picture: gbrUIAW
    },
    {
      id: 4,
      event: 'OIM UI',
      desc: 'Kompetisi mahasiswa UI di bidang Keilmuan',
      picture: gbrOIM
    }
  
];


const CardList = () => {
    return (
      <div className= "triumph-of-spartan">
        <div className= "triumph-of-spartan-text-container">
        <h3 className="triumph-of-spartan-h3">Triumph Of Spartan merupakan ruang apresiasi bagi mahasiswa dan kontingen Vokasi UI yang berlaga dalam OLIM UI, UI Art War, dan OIM UI. Triumph Of Spartan bergerak didasari oleh rasa cinta dan kebanggaan terhadap Vokasi UI.</h3>
        </div>
        <div className= "triumph-of-spartan-card">
        <div>
         {lomba.map(({id, ...lombaProps}) => (
          <Card {...lombaProps} key={id}  />
        ))}
      </div>
      </div>
      </div>
      
      
    );
  }
  
  export default CardList;