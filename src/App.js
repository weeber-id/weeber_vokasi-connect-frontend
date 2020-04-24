import React from 'react';
import './App.scss';
import { Route } from 'react-router-dom';

import TestPage from './pages/test-page/test-page';

function App() {
  return (
    <div className="App">
      <Route exact path="/test-page" component={TestPage} />
    </div>
  );
}

export default App;
