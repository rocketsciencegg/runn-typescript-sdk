"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RosteredDays = void 0;
var RosteredDays = (function () {
    function RosteredDays() {
    }
    RosteredDays.getAttributeTypeMap = function () {
        return RosteredDays.attributeTypeMap;
    };
    RosteredDays.discriminator = undefined;
    RosteredDays.attributeTypeMap = [
        {
            "name": "monday",
            "baseName": "monday",
            "type": "number"
        },
        {
            "name": "tuesday",
            "baseName": "tuesday",
            "type": "number"
        },
        {
            "name": "wednesday",
            "baseName": "wednesday",
            "type": "number"
        },
        {
            "name": "thursday",
            "baseName": "thursday",
            "type": "number"
        },
        {
            "name": "friday",
            "baseName": "friday",
            "type": "number"
        }
    ];
    return RosteredDays;
}());
exports.RosteredDays = RosteredDays;
//# sourceMappingURL=rosteredDays.js.map