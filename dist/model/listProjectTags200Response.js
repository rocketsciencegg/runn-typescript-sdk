"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectTags200Response = void 0;
var ListProjectTags200Response = (function () {
    function ListProjectTags200Response() {
    }
    ListProjectTags200Response.getAttributeTypeMap = function () {
        return ListProjectTags200Response.attributeTypeMap;
    };
    ListProjectTags200Response.discriminator = undefined;
    ListProjectTags200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectTag>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectTags200Response;
}());
exports.ListProjectTags200Response = ListProjectTags200Response;
//# sourceMappingURL=listProjectTags200Response.js.map