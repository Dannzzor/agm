import { Injectable } from '@angular/core';
import { GoogleMapsAPIWrapper } from '../google-maps-api-wrapper';
/**
 * Manages all Heatmap Layers for a Google Map instance.
 */
var HeatmapLayerManager = (function () {
    function HeatmapLayerManager(_wrapper) {
        this._wrapper = _wrapper;
        this._layers = new Map();
    }
    HeatmapLayerManager.prototype.addHeatmapLayer = function (layer) {
        var newLayer = this._wrapper.getNativeMap().then(function (map) {
            return new google.maps.visualization.HeatmapLayer({ map: map, data: [] });
        });
        this._layers.set(layer, newLayer);
        return newLayer;
    };
    HeatmapLayerManager.prototype.setOptions = function (layer, options) {
        return this._layers.get(layer).then(function (l) { return l.setOptions(options); });
    };
    HeatmapLayerManager.prototype.deleteHeatmapLayer = function (layer) {
        var _this = this;
        return this._layers.get(layer).then(function (l) {
            l.setMap(null);
            _this._layers.delete(layer);
        });
    };
    return HeatmapLayerManager;
}());
export { HeatmapLayerManager };
HeatmapLayerManager.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HeatmapLayerManager.ctorParameters = function () { return [
    { type: GoogleMapsAPIWrapper, },
]; };
//# sourceMappingURL=heatmap-layer-manager.js.map