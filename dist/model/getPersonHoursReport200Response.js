"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonHoursReport200Response = void 0;
var GetPersonHoursReport200Response = (function () {
    function GetPersonHoursReport200Response() {
    }
    GetPersonHoursReport200Response.getAttributeTypeMap = function () {
        return GetPersonHoursReport200Response.attributeTypeMap;
    };
    GetPersonHoursReport200Response.discriminator = undefined;
    GetPersonHoursReport200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ReportsHoursPeople>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return GetPersonHoursReport200Response;
}());
exports.GetPersonHoursReport200Response = GetPersonHoursReport200Response;
//# sourceMappingURL=getPersonHoursReport200Response.js.map