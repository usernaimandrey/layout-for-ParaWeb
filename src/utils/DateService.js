import format from 'date-fns/format';
import isWithinInterval from 'date-fns/isWithinInterval';
import { ru } from 'date-fns/locale';
import validate from './validateDate.js';

class DateService {
  constructor() {
    this.format = format;
    this.isWithinInterval = isWithinInterval;
    this.validate = validate;
  }

  formatDate(date) {
    return this.format(new Date(date), 'dd MMMM yyyy', { locale: ru });
  }

  validateDate(date) {
    return this.validate(date);
  }

  isWithRange(date, start, end) {
    return this.isWithinInterval(new Date(date),
      {
        start: new Date(start),
        end: new Date(end),
      });
  }
}

export default new DateService();
