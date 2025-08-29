"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Holiday = void 0;
var Holiday = (function () {
    function Holiday() {
    }
    Holiday.getAttributeTypeMap = function () {
        return Holiday.attributeTypeMap;
    };
    Holiday.discriminator = undefined;
    Holiday.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "observed",
            "baseName": "observed",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        }
    ];
    return Holiday;
}());
exports.Holiday = Holiday;
//# sourceMappingURL=holiday.js.map