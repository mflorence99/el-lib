import { Directive } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Input } from '@angular/core';

/**
 * A directive to handle form submit via valueChanges
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
