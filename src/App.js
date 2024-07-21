import React from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <I18nextProvider i18n={i18n}>
      <select onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="en">English</option>
        <option value="zh-TW">繁體中文</option>
        <option value="zh-CN">简体中文</option>
      </select>
      <h1>{t('welcome')}</h1>
      <p>{t('description')}</p>
    </I18nextProvider>
  );
}

export default App;
