"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonHolidays200Response = void 0;
var ListPersonHolidays200Response = (function () {
    function ListPersonHolidays200Response() {
    }
    ListPersonHolidays200Response.getAttributeTypeMap = function () {
        return ListPersonHolidays200Response.attributeTypeMap;
    };
    ListPersonHolidays200Response.discriminator = undefined;
    ListPersonHolidays200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ListPersonHolidays200ResponseValuesInner>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPersonHolidays200Response;
}());
exports.ListPersonHolidays200Response = ListPersonHolidays200Response;
//# sourceMappingURL=listPersonHolidays200Response.js.map