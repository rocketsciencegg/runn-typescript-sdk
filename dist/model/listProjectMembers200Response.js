"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectMembers200Response = void 0;
var ListProjectMembers200Response = (function () {
    function ListProjectMembers200Response() {
    }
    ListProjectMembers200Response.getAttributeTypeMap = function () {
        return ListProjectMembers200Response.attributeTypeMap;
    };
    ListProjectMembers200Response.discriminator = undefined;
    ListProjectMembers200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ListProjectMembers200ResponseValuesInner>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectMembers200Response;
}());
exports.ListProjectMembers200Response = ListProjectMembers200Response;
//# sourceMappingURL=listProjectMembers200Response.js.map