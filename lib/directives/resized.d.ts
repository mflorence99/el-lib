import { ElementRef, EventEmitter, OnInit } from '@angular/core';
export declare class ResizedDirective implements OnInit {
    private readonly element;
    readonly libResized: EventEmitter<ResizedEvent>;
    private oldWidth;
    private oldHeight;
    constructor(element: ElementRef);
    ngOnInit(): void;
    private onResized();
}
export declare class ResizedEvent {
    readonly element: ElementRef;
    readonly newWidth: number;
    readonly newHeight: number;
    readonly oldWidth: number;
    readonly oldHeight: number;
    constructor(element: ElementRef, newWidth: number, newHeight: number, oldWidth: number, oldHeight: number);
}
