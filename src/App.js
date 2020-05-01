import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Triumph from './pages/triumph_of_spartan/triumph_of_spartan_page';
import ProdiPage from './pages/info_prodi/info_prodi_page';
import TestPage from './pages/test-page/test-page';
import HomePage from './pages/homepage/homepage';
import EventPage from './pages/event-page/event-page';
import LembagaVokasiPage from './pages/lembaga-vokasi/lembaga-vokasi';
import LembagaVokasiDetailPage from './pages/lembaga-vokasi-detail/lembaga-vokasi-detail';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/info-vokasi/triumph-of-spartan" component={Triumph} />
      <Route path="/info-vokasi/info-prodi" component={ProdiPage} />
      <Route exact path="/test-page" component={TestPage} />
      <Route exact path="/lembaga-vokasi-ui" component={LembagaVokasiPage} />
      <Route
        exact
        path="/lembaga-vokasi-ui/:id"
        component={LembagaVokasiDetailPage}
      />
    </div>
  );
}

export default App;
