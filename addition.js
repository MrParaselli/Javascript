"use strict";
exports.__esModule = true;
exports.Addition = void 0;
var Addition = /** @class */ (function () {
    function Addition(x, y) {
        this.x = x;
        this.y = y;
    }
    Addition.prototype.Sum = function () {
        console.log("SUM: " + (this.x + this.y));
    };
    return Addition;
}());
exports.Addition = Addition;
