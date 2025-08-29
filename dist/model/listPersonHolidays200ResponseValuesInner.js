"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonHolidays200ResponseValuesInner = void 0;
var ListPersonHolidays200ResponseValuesInner = (function () {
    function ListPersonHolidays200ResponseValuesInner() {
    }
    ListPersonHolidays200ResponseValuesInner.getAttributeTypeMap = function () {
        return ListPersonHolidays200ResponseValuesInner.attributeTypeMap;
    };
    ListPersonHolidays200ResponseValuesInner.discriminator = undefined;
    ListPersonHolidays200ResponseValuesInner.attributeTypeMap = [
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
        },
        {
            "name": "holidayId",
            "baseName": "holidayId",
            "type": "number"
        }
    ];
    return ListPersonHolidays200ResponseValuesInner;
}());
exports.ListPersonHolidays200ResponseValuesInner = ListPersonHolidays200ResponseValuesInner;
//# sourceMappingURL=listPersonHolidays200ResponseValuesInner.js.map