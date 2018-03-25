import { AfterViewInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Injector } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { OnInit } from '@angular/core';
/**
 * lib-drawer-panel component
 *
 * Slidable drawer panel, top, right, bottom, left.
 */
export declare class DrawerPanelComponent implements AfterViewInit, OnDestroy, OnInit {
    private element;
    private injector;
    position: 'top' | 'right' | 'bottom' | 'left';
    private container;
    private el;
    /** ctor */
    constructor(element: ElementRef, injector: Injector);
    /** Close drawer */
    close(): void;
    /** Open drawer */
    open(): void;
    onResize(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
    private setup();
}
