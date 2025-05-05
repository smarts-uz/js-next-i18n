import uzTranslation from '../../public/locales/uz.json';
import ruTranslation from '../../public/locales/ru.json';
import enTranslation from '../../public/locales/en.json';


const i18nConfig = {
  locales: ['uz', 'ru', 'en'],
  defaultLocale: 'uz',
  resources: {
    uz: {
      translation: uzTranslation,
    },
    ru: {
      translation: ruTranslation,
    },
    en: {
      translation: enTranslation,
    },
  },
};

module.exports = i18nConfig;