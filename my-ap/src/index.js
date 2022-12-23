import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import FirstPage from './pages/FirstPage.js';
import reportWebVitals from './reportWebVitals';
import MainMenu from './Components/MainMenu';
//import the themes file 
//TODO: check if the Themes file uploads theme to all the files
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainMenu/>
    <FirstPage/>
    <Home/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
