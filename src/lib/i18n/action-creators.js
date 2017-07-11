export const CHANGE_LOCALE = 'CHANGE_LOCALE';
export const changeLocale = (locale) => ({ type: CHANGE_LOCALE, payload: { locale } });
export const changeLocaleHandler = (state, action) => ({
  ...state,
  locale: action.payload.locale,
});

export default {
  [CHANGE_LOCALE]: changeLocaleHandler,
};
