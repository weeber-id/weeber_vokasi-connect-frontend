import React from 'react';
import Documentation from './documentation';

import dok1 from '../../assets/images/Dokumentasi 1.JPG';
import dok2 from '../../assets/images/Dokumentasi 2.JPG';
import dok3 from '../../assets/images/Dokumentasi 3.JPG';
import dok4 from '../../assets/images/Dokumentasi 4.JPG';

const dokum = [
  {
    id: 1,
    imgUrl: dok1
  },
  {
    id: 2,
    imgUrl: dok2
  },
  {
    id: 3,
    imgUrl: dok3
  },
  {
    id: 4,
    imgUrl: dok4
  }
];

const DocList = () => {
  return (
    <div className="doclist">
      <h1 className="documentation-h1">
        <b>Dokumentasi</b>
      </h1>
      <div className="doclist-image">
        {dokum.map(({ id, ...dokumProps }) => (
          <Documentation {...dokumProps} key={id} />
        ))}
      </div>
    </div>
  );
};

export default DocList;
