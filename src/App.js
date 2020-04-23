import React from 'react';
import './App.scss';
import CardList from '../src/components/cards/cardlist';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        render={() => {
          return <CardList/>;
        }}
      />
    </div>
  );
}

export default App;
