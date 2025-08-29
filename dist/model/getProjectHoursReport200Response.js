"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectHoursReport200Response = void 0;
var GetProjectHoursReport200Response = (function () {
    function GetProjectHoursReport200Response() {
    }
    GetProjectHoursReport200Response.getAttributeTypeMap = function () {
        return GetProjectHoursReport200Response.attributeTypeMap;
    };
    GetProjectHoursReport200Response.discriminator = undefined;
    GetProjectHoursReport200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ReportsHoursProjects>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return GetProjectHoursReport200Response;
}());
exports.GetProjectHoursReport200Response = GetProjectHoursReport200Response;
//# sourceMappingURL=getProjectHoursReport200Response.js.map