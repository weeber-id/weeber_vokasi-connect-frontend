import React from 'react';
import CardList from '../../components/triumph-of-spartan/cards/cardlist';
import DocList from '../../components/triumph-of-spartan/dokumentasi-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const Triumph = () => {
  return (
    <div>
      <Header color="tos" />
      <CardList />
      <DocList />
      <Footer />
    </div>
  );
};

export default Triumph;
