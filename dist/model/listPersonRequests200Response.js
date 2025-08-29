"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonRequests200Response = void 0;
var ListPersonRequests200Response = (function () {
    function ListPersonRequests200Response() {
    }
    ListPersonRequests200Response.getAttributeTypeMap = function () {
        return ListPersonRequests200Response.attributeTypeMap;
    };
    ListPersonRequests200Response.discriminator = undefined;
    ListPersonRequests200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<PersonRequest>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPersonRequests200Response;
}());
exports.ListPersonRequests200Response = ListPersonRequests200Response;
//# sourceMappingURL=listPersonRequests200Response.js.map