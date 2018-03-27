import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
/**
 * Animate a router outlet
 */
export declare class AnimatedRouterOutletComponent implements OnInit {
    private router;
    url: string;
    readonly trigger: string;
    /** ctor */
    constructor(router: Router);
    ngOnInit(): void;
}
