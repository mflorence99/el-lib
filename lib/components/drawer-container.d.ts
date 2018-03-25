import { DrawerPanelComponent } from './drawer-panel';
/**
 * lib-drawer-container
 *
 * Used to hold lib-drawer-panels
 */
export declare class DrawerContainerComponent {
    drawers: {
        bottom: DrawerPanelComponent;
        left: DrawerPanelComponent;
        right: DrawerPanelComponent;
        top: DrawerPanelComponent;
    };
    masked: boolean;
    /** Close all the drawers */
    closeAll(): void;
    /** A drawer has been closed */
    closed(drawer: DrawerPanelComponent): void;
    /** A drawer has been opened */
    opened(drawer: DrawerPanelComponent): void;
}
