import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './styles/StylesGlobal';
import Routes from './routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routes/>
    <GlobalStyles/>
  </React.StrictMode>
);


