"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListAssignments200Response = void 0;
var ListAssignments200Response = (function () {
    function ListAssignments200Response() {
    }
    ListAssignments200Response.getAttributeTypeMap = function () {
        return ListAssignments200Response.attributeTypeMap;
    };
    ListAssignments200Response.discriminator = undefined;
    ListAssignments200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Assignment>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListAssignments200Response;
}());
exports.ListAssignments200Response = ListAssignments200Response;
//# sourceMappingURL=listAssignments200Response.js.map