import format from 'date-fns/format';
import isWithinInterval from 'date-fns/isWithinInterval';
import { ru } from 'date-fns/locale';

class DateService {
  constructor() {
    this.format = format;
    this.isWithinInterval = isWithinInterval;
  }

  formatDate(date) {
    return this.format(new Date(date), 'dd MMMM yyyy', { locale: ru });
  }
}

export default new DateService();
