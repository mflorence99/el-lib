import { Directive, EventEmitter, HostListener, Input } from '@angular/core';

import { FormGroup } from '@angular/forms';

/**
 * A directive to handle form submit via calueChanges
 */

@Directive ({
  selector: '[libRxfSubmit]'
})

export class RxfSubmitDirective {
  @Input() libRxfSubmit: FormGroup;

  // listeners

  @HostListener('submit') onSubmit() {
    const emitter = this.libRxfSubmit.valueChanges as EventEmitter<any>;
    emitter.emit({ ...this.libRxfSubmit.value, submitted: true });
  }

}
