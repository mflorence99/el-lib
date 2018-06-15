import { AfterViewInit } from '@angular/core';
import { OnChanges } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
import { SimpleChanges } from '@angular/core';

/**
 * The whole point of this mess is to defeat the AOT compiler and make our
 * custom directives work: @AutoUnsubscribe and @OnChange
 *
 * @see @lucato https://github.com/angular/angular/issues/16023
 */

export class LifecycleComponent
  implements AfterViewInit, OnChanges, OnDestroy, OnInit {

  ngAfterViewInit() { }

  ngOnChanges(changes: SimpleChanges) { }

  ngOnDestroy() { }

  ngOnInit() { }

}
