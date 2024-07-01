import React from 'react';

import Sidebar from 'components/Sidebar';
import MainContent from 'components/Main';

import './scss/App.scss';

const App = () => (
  <div className="App" id="app">
    <Sidebar />
    <MainContent />
  </div>
);
export default App;
