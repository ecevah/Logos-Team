import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'remixicon/fonts/remixicon.css';

window.onload = function(){
  const tabId = sessionStorage.tabId ? sessionStorage.tabId : sessionStorage.tabId = Math.random();
  localStorage.tabId = tabId;

  const interval = setInterval(function(){
    if(tabId != localStorage.tabId){
      clearInterval(interval)
      tabError();
    }
    document.getElementById('isLoading').style.display = 'none';
  },1000);

  function tabError(){
    document.getElementById('root').style.display = 'none';
    document.getElementById('unroot').style.display = 'flex';
    document.getElementById('isLoading').style.display = 'none';
  }
}   

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


reportWebVitals();
