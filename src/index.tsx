import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { Provider } from 'react-redux';
import { store } from './store';
import './styles/global/global.css'
// MUI ROBOTO FONT
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
if (localStorage && localStorage.token) {
    const access_token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Token ${access_token}`
}
axios.defaults.headers.post['Content-Type'] = 'application/json'


function setDocHeight() {
  document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
};

window.addEventListener('resize', setDocHeight);
window.addEventListener('orientationchange', setDocHeight);
setDocHeight();


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

