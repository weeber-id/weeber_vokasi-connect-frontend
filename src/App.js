import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Triumph from './pages/triumph_of_spartan/triumph_of_spartan_page';
import ProdiPage from './pages/info_prodi/info_prodi_page';
import TestPage from './pages/test-page/test-page';
import HomePage from './pages/homepage/homepage';
import EventPage from './pages/event-page/event-page';
<<<<<<< HEAD
import Iseng from './pages/test-page/test-zhorif';
=======
import LembagaVokasiPage from './pages/lembaga-vokasi/lembaga-vokasi';
>>>>>>> 80253cdf43ecde52823d6161f6aa68e8a010b835

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={HomePage} />
      <Route exact path="/iseng" component={Iseng} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/info-vokasi/triumph-of-spartan" component={Triumph} />
      <Route path="/info-vokasi/info-prodi" component={ProdiPage} />
      <Route exact path="/test-page" component={TestPage} />
<<<<<<< HEAD
=======
      <Route exact path="/lembaga-vokasi-ui" component={LembagaVokasiPage} />
>>>>>>> 80253cdf43ecde52823d6161f6aa68e8a010b835
    </div>
  );
}

export default App;
