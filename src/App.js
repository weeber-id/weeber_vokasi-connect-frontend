import React from 'react';
import './App.scss';

import Triumph from '../src/pages/triumph_of_spartan/triumph_of_spartan_page';
import ProdiPage from '../src/pages/info_prodi/info_prodi_page';

import { Route } from 'react-router-dom';

import TestPage from './pages/test-page/test-page';
import HomePage from './pages/homepage/homepage';
import EventPage from './pages/event-page/event-page';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/triumph" component={Triumph} />
      <Route path="/info-prodi" component={ProdiPage} />
      <Route exact path="/test-page" component={TestPage} />
    </div>
  );
}

export default App;
