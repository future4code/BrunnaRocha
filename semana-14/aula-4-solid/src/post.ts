import { JSONFileManager } from './JSONFileManager';
import * as moment from 'moment'

class Post {
  name: string;
  text: string;
  date: moment.Moment;

  constructor(name: string, text: string, date: moment.Moment) {
      this.name = name;
      this.text = text;
      this.date = date;
  }
}
