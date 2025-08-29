"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPersonCurrentTeam200Response = void 0;
var GetPersonCurrentTeam200Response = (function () {
    function GetPersonCurrentTeam200Response() {
    }
    GetPersonCurrentTeam200Response.getAttributeTypeMap = function () {
        return GetPersonCurrentTeam200Response.attributeTypeMap;
    };
    GetPersonCurrentTeam200Response.discriminator = undefined;
    GetPersonCurrentTeam200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<GetPersonCurrentTeam200ResponseValuesInner>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return GetPersonCurrentTeam200Response;
}());
exports.GetPersonCurrentTeam200Response = GetPersonCurrentTeam200Response;
//# sourceMappingURL=getPersonCurrentTeam200Response.js.map