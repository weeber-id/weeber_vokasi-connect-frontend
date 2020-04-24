import React from 'react';
import Card from './Card';

const lomba = [
  {
    id: 1,
    event: 'Parade',
    desc: 'Pembukaan event Pesta Rakyat UI (OLIM, OIM, UI Art War)',
    picture: 'link asset aris'
  },
  {
    id: 2,
    event: 'OLIM UI',
    desc: 'Kompetisi Mahasiswa UI di bidang Seni Budaya',
    picture: 'link asset aris'
  },
  {
    id: 3,
    event: 'UI Art War',
    desc: 'Kompetisi mahasiswa UI di bidang Seni Budaya',
    picture: 'link asset aris'
  },
  {
    id: 4,
    event: 'OIM UI',
    desc: 'Kompetisi mahasiswa UI di bidang Keilmuan',
    picture: 'link asset aris'
  }
];

const CardList = () => {
  return (
    <div>
      <p>
        Triumph Of Spartan merupakan ruang apresiasi bagi mahasiswa dan
        kontingen Vokasi UI yang berlaga dalam OLIM UI, UI Art War, dan OIM UI.
        Triumph Of Spartan bergerak didasari oleh rasa cinta dan kebanggaan
        terhadap Vokasi UI.
      </p>
      <div>
        {lomba.map(({ id, ...lombaProps }) => (
          <Card {...lombaProps} key={id} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
