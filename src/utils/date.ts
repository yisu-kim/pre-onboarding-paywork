const KO_KR_LOCALE = 'ko-KR';

const SEOUL_TIMEZONE = 'Asia/Seoul';

export const getYearAndMonth = (date: string) => {
  return new Date(date).toLocaleDateString(KO_KR_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    year: 'numeric',
    month: 'long',
  });
};

export const getDay = (date: string) => {
  return new Date(date).toLocaleDateString(KO_KR_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    day: 'numeric',
  });
};

export const getWeekday = (date: string) => {
  return new Date(date).toLocaleDateString(KO_KR_LOCALE, {
    timeZone: SEOUL_TIMEZONE,
    weekday: 'long',
  });
};
