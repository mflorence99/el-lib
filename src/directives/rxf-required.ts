import { Directive } from '@angular/core';
import { Input } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Validators } from '@angular/forms';

/**
 * @see https://netbasal.com/disabling-form-controls-when-working-with-reactive-forms-in-angular-549dd7b42110
 * 
 * TODO: this only works if "required" is the only validator
 * Angular currently has no getValidators API
 */

@Directive({
  selector: '[libRxfRequired]'
})

export class RxfRequiredDirective {

  @Input() set libRxfRequired(state: boolean) {
    if (state)
      this.ngControl.control.setValidators(Validators.required);
    else this.ngControl.control.clearValidators();
  }

  /** ctor */
  constructor(private ngControl: NgControl) { }

}
