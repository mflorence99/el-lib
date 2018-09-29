import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';

import { debounceTime } from 'rxjs/operators';

/**
 * Debounces an Observable, as into the async pipe
 */

@Pipe({ name: 'libDebounce' })
export class DebouncePipe implements PipeTransform {

  transform(obs: Observable<any>,
            time: number): Observable<any> {
    return obs.pipe(debounceTime(time));
  }

}
