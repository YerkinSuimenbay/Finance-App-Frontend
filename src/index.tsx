import React, { Suspense } from 'react';
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

// MULTI LANG
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

// AXIOS SETTINGS
axios.defaults.baseURL = process.env.REACT_APP_SERVER_URL;
if (localStorage && localStorage.token) {
    const access_token = localStorage.getItem('token');
    axios.defaults.headers.common['Authorization'] = `Token ${access_token}`
}
axios.defaults.headers.post['Content-Type'] = 'application/json'

// CSS VH SETTINGS
const setDocHeight = () => document.documentElement.style.setProperty('--vh', `${window.innerHeight/100}px`);
window.addEventListener('resize', setDocHeight);
window.addEventListener('orientationchange', setDocHeight);
setDocHeight();

// MULTI LANG SETTINGS
i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    supportedLngs: ['en', 'kz', 'ru'],
    fallbackLng: "en",
    detection: {
      order: ['htmlTag', 'cookie', 'localStorage',  'path', 'subdomain'],
      caches: ['cookie', 'localStorage ']
    },
    backend: {
      loadPath: 'assets/locales/{{lng}}/translation.json',
    },
    react: { useSuspense: false }
  });

  const loadingMarkup = (
    <div className="py-4 text-center">
      <h3>Loading..</h3>
    </div>
  )

ReactDOM.render(
  <Suspense fallback={loadingMarkup}>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);

