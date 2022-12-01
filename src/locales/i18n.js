
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import en from './en/translation.json';
import ua from './ua/translation.json';
import fr from './fr/translation.json';


// ----------------------------------------------------------------------------

export const translationsJson = {
  en: {
    translation: en,
    name: 'EN',
    icon: '/static/icons/ic_flag_us.svg',
  },
  ua: {
    translation: ua,
    name: 'UA',
    icon: '/static/icons/ic_flag_dc.svg',
  },
  fr: {
    translation: fr,
    name: 'FR',
    icon: '/static/icons/ic_flag_dc.svg',
  },
};

export const availableLanguages = Object.keys(translationsJson).map((item) => ({
  name: translationsJson[item].name,
  locale: item,
  icon: translationsJson[item].icon,
}));


export const i18n = i18next
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: translationsJson,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default

    },
  });
