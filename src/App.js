// src/App.js
import React from 'react';
import { useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <div>
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="tw">中文</option>
      </select>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </div>
  );
}

export default App;
