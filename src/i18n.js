import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const sourceURL = process.env.REACT_APP_I18N_URL;

const fetchTranslations = async () => {
  try {
    const response = await fetch(sourceURL);
    const translations = await response.json();

    const resources = {
      en: { translation: {} },
      'zh-TW': { translation: {} },
      'zh-CN': { translation: {} },
    };

    Object.keys(translations).forEach((key) => {
      resources.en.translation[key] = translations[key].en;
      resources['zh-TW'].translation[key] = translations[key]['zh-TW'];
      resources['zh-CN'].translation[key] = translations[key]['zh-CN'];
    });

    return resources;
  } catch (error) {
    console.error('Error fetching translations:', error);
    return {};
  }
};

const translations = await fetchTranslations();
const lng = localStorage.getItem('i18nextLng');
i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translations,
    lng: lng,
    fallbackLng: 'en',
    debug: false,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
