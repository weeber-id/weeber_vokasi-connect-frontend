import React from 'react';
import './App.scss';

import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route
        path="/"
        render={() => {
          return <h1>test</h1>;
        }}
      />
    </div>
  );
}

export default App;
