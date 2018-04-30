import { Directive, Input } from '@angular/core';
import { HeatmapLayerManager } from '../services/managers/heatmap-layer-manager';
var layerId = 0;
var AgmHeatmapLayer = (function () {
    function AgmHeatmapLayer(_manager) {
        this._manager = _manager;
        this._addedToManager = false;
        this._id = (layerId++).toString();
        /**
         * The data points to display. Required.
         */
        this.data = null;
        /**
         * Specifies whether heatmaps dissipate on zoom. By default, the radius of influence of a data point
         * is specified by the radius option only. When dissipating is disabled, the radius option is interpreted
         * as a radius at zoom level 0.
         */
        this.dissipating = false;
        /**
         * The color gradient of the heatmap, specified as an array of CSS color strings. All CSS3 colors are
         * supported except for extended named colors.
         */
        this.gradient = null;
        /**
         * The maximum intensity of the heatmap. By default, heatmap colors are dynamically scaled
         * according to the greatest concentration of points at any particular pixel on the map. This property
         * allows you to specify a fixed maximum.
         */
        this.maxIntensity = null;
        /**
         * The radius of influence for each data point, in pixels.
         */
        this.radius = null;
        /**
         * The opacity of the heatmap, expressed as a number between 0 and 1. Defaults to 0.6.
         */
        this.opacity = null;
    }
    AgmHeatmapLayer.prototype.ngOnInit = function () {
        if (this._addedToManager) {
            return;
        }
        this._manager.addHeatmapLayer(this);
        this._addedToManager = true;
    };
    AgmHeatmapLayer.prototype.ngOnChanges = function (changes) {
        if (!this._addedToManager) {
            return;
        }
        this._updatePolygonOptions(changes);
    };
    AgmHeatmapLayer.prototype._updatePolygonOptions = function (changes) {
        var options = Object.keys(changes)
            .filter(function (k) { return AgmHeatmapLayer._heatmapLayerOptions.indexOf(k) !== -1; })
            .reduce(function (obj, k) {
            obj[k] = changes[k].currentValue;
            return obj;
        }, {});
        if (Object.keys(options).length > 0) {
            this._manager.setOptions(this, options);
        }
    };
    /** @internal */
    AgmHeatmapLayer.prototype.id = function () {
        return this._id;
    };
    /** @internal */
    AgmHeatmapLayer.prototype.toString = function () {
        return "AgmHeatmapLayer-" + this._id.toString();
    };
    /** @internal */
    AgmHeatmapLayer.prototype.ngOnDestroy = function () {
        this._manager.deleteHeatmapLayer(this);
    };
    return AgmHeatmapLayer;
}());
export { AgmHeatmapLayer };
AgmHeatmapLayer._heatmapLayerOptions = [
    'data',
    'dissipating',
    'gradient',
    'maxIntensity',
    'opacity',
    'radius',
    'options'
];
AgmHeatmapLayer.decorators = [
    { type: Directive, args: [{
                selector: 'agm-heatmap-layer'
            },] },
];
/** @nocollapse */
AgmHeatmapLayer.ctorParameters = function () { return [
    { type: HeatmapLayerManager, },
]; };
AgmHeatmapLayer.propDecorators = {
    'data': [{ type: Input },],
    'dissipating': [{ type: Input },],
    'gradient': [{ type: Input },],
    'maxIntensity': [{ type: Input },],
    'radius': [{ type: Input },],
    'opacity': [{ type: Input },],
};
//# sourceMappingURL=heatmap-layer.js.map