"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimeOff = void 0;
var TimeOff = (function () {
    function TimeOff() {
    }
    TimeOff.getAttributeTypeMap = function () {
        return TimeOff.attributeTypeMap;
    };
    TimeOff.discriminator = undefined;
    TimeOff.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
        }
    ];
    return TimeOff;
}());
exports.TimeOff = TimeOff;
//# sourceMappingURL=timeOff.js.map