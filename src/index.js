import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './header';
import reportWebVitals from './reportWebVitals';
import MyComponent from './usecase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Header /> */}
    <MyComponent/>
  </React.StrictMode>
);
reportWebVitals();
