"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHolidayGroups200Response = void 0;
var ListHolidayGroups200Response = (function () {
    function ListHolidayGroups200Response() {
    }
    ListHolidayGroups200Response.getAttributeTypeMap = function () {
        return ListHolidayGroups200Response.attributeTypeMap;
    };
    ListHolidayGroups200Response.discriminator = undefined;
    ListHolidayGroups200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<HolidayGroup>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListHolidayGroups200Response;
}());
exports.ListHolidayGroups200Response = ListHolidayGroups200Response;
//# sourceMappingURL=listHolidayGroups200Response.js.map