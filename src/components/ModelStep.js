import parseDate from './parseDate';

export default class ModelStep {
    constructor(date, distance) {
      this.date = date;
      this.distance = Number.parseInt(distance, 10);
      this.id = parseDate(date);
    }
}