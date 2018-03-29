import { Directive, EventEmitter, HostListener, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

/**
 * A directive to handle form submit via calueChanges
 */

@Directive ({
  selector: '[libRxfSubmit]'
})

export class RxfSubmitDirective {
  @Input() el3270RxfSubmit: FormGroup;

  // listeners

  @HostListener('submit') onSubmit() {
    const emitter = this.el3270RxfSubmit.valueChanges as EventEmitter<any>;
    emitter.emit({ ...this.el3270RxfSubmit.value, submitted: true });
  }

}
