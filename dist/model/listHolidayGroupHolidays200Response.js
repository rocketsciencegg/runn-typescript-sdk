"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListHolidayGroupHolidays200Response = void 0;
var ListHolidayGroupHolidays200Response = (function () {
    function ListHolidayGroupHolidays200Response() {
    }
    ListHolidayGroupHolidays200Response.getAttributeTypeMap = function () {
        return ListHolidayGroupHolidays200Response.attributeTypeMap;
    };
    ListHolidayGroupHolidays200Response.discriminator = undefined;
    ListHolidayGroupHolidays200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Holiday>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListHolidayGroupHolidays200Response;
}());
exports.ListHolidayGroupHolidays200Response = ListHolidayGroupHolidays200Response;
//# sourceMappingURL=listHolidayGroupHolidays200Response.js.map