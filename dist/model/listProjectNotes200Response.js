"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectNotes200Response = void 0;
var ListProjectNotes200Response = (function () {
    function ListProjectNotes200Response() {
    }
    ListProjectNotes200Response.getAttributeTypeMap = function () {
        return ListProjectNotes200Response.attributeTypeMap;
    };
    ListProjectNotes200Response.discriminator = undefined;
    ListProjectNotes200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectNote>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectNotes200Response;
}());
exports.ListProjectNotes200Response = ListProjectNotes200Response;
//# sourceMappingURL=listProjectNotes200Response.js.map