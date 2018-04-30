import { OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HeatmapLayerManager } from '../services/managers/heatmap-layer-manager';
export declare class AgmHeatmapLayer implements OnInit, OnChanges, OnDestroy {
    private _manager;
    private _addedToManager;
    private _id;
    private static _heatmapLayerOptions;
    /**
     * The data points to display. Required.
     */
    data: any[] | null;
    /**
     * Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point
     * is specified by the radius option only. When dissipating is disabled, the radius option is interpreted
     * as a radius at zoom level 0.
     */
    dissipating: boolean;
    /**
     * The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are
     * supported except for extended named colors.
     */
    gradient: string[] | null;
    /**
     * The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled
     * according to the greatest concentration of points at any particular pixel on the map. This property
     * allows you to specify a fixed maximum.
     */
    maxIntensity: number | null;
    /**
     * The radius of influence for each data point, in pixels.
     */
    radius: number | null;
    /**
     * The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.
     */
    opacity: number | null;
    constructor(_manager: HeatmapLayerManager);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    private _updatePolygonOptions(changes);
    /** @internal */
    id(): string;
    /** @internal */
    toString(): string;
    /** @internal */
    ngOnDestroy(): void;
}
