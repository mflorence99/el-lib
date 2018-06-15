import * as moment from 'moment';

import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

/**
 * Pipe wrapper around moment.js
 */

@Pipe({ name: 'libDateFormat' })

export class DateFormatPipe implements PipeTransform {

  transform(date: Date,
            fmt: string): string {
    return moment(date).format(fmt);
  }

}
