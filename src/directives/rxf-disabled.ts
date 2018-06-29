import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { NgControl } from '@angular/forms';

/**
 * @see https://netbasal.com/disabling-form-controls-when-working-with-reactive-forms-in-angular-549dd7b42110
 */

@Directive({
  selector: '[libRxfDisabled]'
})

export class RxfDisabledDirective {

  @Input() set libRxfDisabled(state: boolean) {
    if (state)
      this.ngControl.control.disable();
    else this.ngControl.control.enable();
  }

  /** ctor */
  constructor(private ngControl: NgControl) { }

}
