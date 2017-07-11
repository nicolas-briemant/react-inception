import { createSelector } from 'reselect';

const getState = (state) => state.i18n;

export const getLocale = () => createSelector(getState, (state) => state.locale);
export const getAvailableLocales = () => createSelector(getState, (state) => state.availableLocales);
