import React from 'react';
import './App.scss';
import Triumph from '../src/pages/triumph_of_spartan/triumph_of_spartan_page';
import ProdiPage from '../src/pages/info_prodi/info_prodi_page';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        render={() => {
          return <h1>Header</h1>;
        }}
      />
      <Route exact path='/triumph' component={Triumph} />
        <Route path='/info-prodi' component={ProdiPage} />
    </div>
  );
}

export default App;
