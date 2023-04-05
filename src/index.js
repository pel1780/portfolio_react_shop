import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import Scrolltop from './pages/ScrollTop';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='portfolio_react_shop'>
      <Scrolltop />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

