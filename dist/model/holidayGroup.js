"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HolidayGroup = void 0;
var HolidayGroup = (function () {
    function HolidayGroup() {
    }
    HolidayGroup.getAttributeTypeMap = function () {
        return HolidayGroup.attributeTypeMap;
    };
    HolidayGroup.discriminator = undefined;
    HolidayGroup.attributeTypeMap = [
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
            "name": "countryCode",
            "baseName": "countryCode",
            "type": "string"
        },
        {
            "name": "countryName",
            "baseName": "countryName",
            "type": "string"
        },
        {
            "name": "regionName",
            "baseName": "regionName",
            "type": "string"
        },
        {
            "name": "holidayIds",
            "baseName": "holidayIds",
            "type": "Array<number>"
        }
    ];
    return HolidayGroup;
}());
exports.HolidayGroup = HolidayGroup;
//# sourceMappingURL=holidayGroup.js.map