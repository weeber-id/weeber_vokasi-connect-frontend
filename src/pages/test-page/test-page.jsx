import React from 'react';

import Button from '../../components/button/button';
import Header from '../../components/header/header';
import ArtikelCard from '../../components/artikel-card/artikel-card';

const TestPage = () => (
  <div className="test-page">
    <Header />
    <Button>Ini Button</Button>
    <ArtikelCard />
  </div>
);

export default TestPage;
