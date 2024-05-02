import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import FirstSection from './section1';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirstSection/>
  </React.StrictMode>
);

reportWebVitals();
