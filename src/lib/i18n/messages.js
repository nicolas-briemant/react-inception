import { addLocaleData } from 'react-intl';
import enLocaleData from 'react-intl/locale-data/en';
import frLocaleData from 'react-intl/locale-data/fr';
import { formatTranslationMessages } from './utils';
import enTranslationMessages from '../../../translations/en.json';
import frTranslationMessages from '../../../translations/fr.json';

export const DEFAULT_LOCALE = 'en';
export const appLocales = [
  'en',
  'fr',
];

addLocaleData(enLocaleData);
addLocaleData(frLocaleData);

export default {
  en: formatTranslationMessages('en', enTranslationMessages),
  fr: formatTranslationMessages('fr', frTranslationMessages),
};
