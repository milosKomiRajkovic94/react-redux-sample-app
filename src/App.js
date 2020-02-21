import React from 'react';

import './styles/App.scss';

import Header from './components/Header';

import InnerContainer from './components/InnerContainer';

const App = () => {
  return (
    <div className="container">
      <Header />
      <InnerContainer />
    </div>
  )
}

export default App;
