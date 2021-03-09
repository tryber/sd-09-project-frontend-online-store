import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={ LandingPage } />
    </BrowserRouter>
  );
}

export default App;
