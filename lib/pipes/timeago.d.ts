import { ChangeDetectorRef, OnDestroy, PipeTransform } from '@angular/core';
/**
 * Pipe wrapper around moment.js
 */
export declare class TimeAgoPipe implements PipeTransform, OnDestroy {
    private _cdRef;
    private currentTimer;
    constructor(_cdRef: ChangeDetectorRef);
    transform(value: any): string;
    ngOnDestroy(): void;
    private removeTimer();
    private getSecondsUntilUpdate(momentInstance);
}
