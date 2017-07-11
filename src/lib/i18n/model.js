// export function: model can be configurable and won't be modified if recalled
export default () => ({
  // current locale
  locale: 'en',

  // available locales, useful to build locales selector
  availableLocales: {
    en: { label: 'English' },
    fr: { label: 'Français' },
  },

  // timezone, useful for dates
  timezone: null,

  // currency, useful for formats
  currency: null,

  // font direction, useful for languages such as arabic
  direction: 'rtl',
});
