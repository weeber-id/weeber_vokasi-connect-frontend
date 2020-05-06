import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Triumph from './pages/triumph_of_spartan/triumph_of_spartan_page';
import ProdiPage from './pages/info_prodi/info_prodi_page';
import ArticlePage from './pages/article-page/article';
import ArticlePageDetail from './pages/article-page-detail/article-page-detail';
import HomePage from './pages/homepage/homepage';
import EventPage from './pages/event-page/event-page';
import LembagaVokasiPage from './pages/lembaga-vokasi/lembaga-vokasi';
import LembagaVokasiDetailPage from './pages/lembaga-vokasi-detail/lembaga-vokasi-detail';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/info-vokasi/triumph-of-spartan" component={Triumph} />
      <Route path="/info-vokasi/info-prodi" component={ProdiPage} />
      <Route exact path="/artikel" component={ArticlePage} />
      <Route exact path="/lembaga-vokasi-ui" component={LembagaVokasiPage} />
      <Route
        exact
        path="/lembaga-vokasi-ui/:id"
        component={LembagaVokasiDetailPage}
      />
      <Route exact path="/artikel/:id" component={ArticlePageDetail} />
    </div>
  );
}

export default App;
