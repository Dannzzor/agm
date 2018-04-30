import { AgmHeatmapLayer } from '../../directives/heatmap-layer';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
import { HeatmapLayerOptions } from '../google-maps-types';
/**
 * Manages all Heatmap Layers for a Google Map instance.
 */
export declare class HeatmapLayerManager {
    private _wrapper;
    private _layers;
    constructor(_wrapper: GoogleMapsAPIWrapper);
    addHeatmapLayer(layer: AgmHeatmapLayer): Promise<any>;
    setOptions(layer: AgmHeatmapLayer, options: HeatmapLayerOptions): Promise<void>;
    deleteHeatmapLayer(layer: AgmHeatmapLayer): Promise<void>;
}
