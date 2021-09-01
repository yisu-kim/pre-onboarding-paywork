import { Platform } from 'react-native';

const KO_KR_LOCALE = 'ko-KR';

if (Platform.OS === 'android') {
  require('intl');
  require(`intl/locale-data/jsonp/${KO_KR_LOCALE}`);
}

export const getYearAndMonth = (date: Date) => {
  return new Intl.DateTimeFormat(KO_KR_LOCALE, {
    year: 'numeric',
    month: 'long',
  }).format(date);
};

export const getDay = (date: Date) => {
  return new Intl.DateTimeFormat(KO_KR_LOCALE, {
    day: 'numeric',
  }).format(date);
};

export const getWeekday = (date: Date) => {
  return new Intl.DateTimeFormat(KO_KR_LOCALE, {
    weekday: 'long',
  }).format(date);
};
