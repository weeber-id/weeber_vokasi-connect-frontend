import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import Triumph from './pages/triumph_of_spartan/triumph_of_spartan_page';
import ProdiPage from './pages/info_prodi/info_prodi_page';
import ArticlePage from './pages/article-page/article';
import BemVokasiPage from './pages/bem-vokasi-page/bem-vokasi-page';
import ArticlePageDetail from './pages/article-page-detail/article-page-detail';
import HomePage from './pages/homepage/homepage';
import EventPage from './pages/event-page/event-page';

import DataPublikPage from './pages/data-publik-page/data-publik-page';
import DataPublikDetail from './pages/data-publik-detail/data-publik-detail';
import LembagaVokasiPage from './pages/lembaga-vokasi/lembaga-vokasi';
import RuangPrestasi from './pages/ruang-prestasi-page/ruang-prestasi-page';
import LembagaVokasiDetailPage from './pages/lembaga-vokasi-detail/lembaga-vokasi-detail';
import ScrollToTop from './components/scroll-to-top/scroll-to-top';

function App() {
  return (
    <div className="App">
      <ScrollToTop />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/event" component={EventPage} />
      <Route exact path="/data-publik/" component={DataPublikPage} />
      <Route exact path="/data-publik/:id" component={DataPublikDetail} />
      <Route
        exact
        path="/info-vokasi/ruang-prestasi"
        component={RuangPrestasi}
      />
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
      <Route exact path="/profil-organisasi/:id" component={BemVokasiPage} />
    </div>
  );
}

export default App;
