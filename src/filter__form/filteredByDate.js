import DateService from '../utils/DateService.js';

const filteredByDate = (collCards, startDate, endDate) => {
  if (startDate && endDate) {
    const filtered = collCards
      .filter(({ publishedAt }) => DateService.isWithRange(publishedAt, startDate, endDate));
    return filtered;
  } if (startDate && !endDate) {
    const filtered = collCards
      .filter(({ publishedAt }) => Date.parse(publishedAt) > Date.parse(startDate));
    return filtered;
  } if (!startDate && endDate) {
    const filtered = collCards
      .filter(({ publishedAt }) => Date.parse(publishedAt) < Date.parse(endDate));
    return filtered;
  }

  return collCards;
};

export default filteredByDate;
