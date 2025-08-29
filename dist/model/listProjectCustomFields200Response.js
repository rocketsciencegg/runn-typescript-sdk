"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectCustomFields200Response = void 0;
var ListProjectCustomFields200Response = (function () {
    function ListProjectCustomFields200Response() {
    }
    ListProjectCustomFields200Response.getAttributeTypeMap = function () {
        return ListProjectCustomFields200Response.attributeTypeMap;
    };
    ListProjectCustomFields200Response.discriminator = undefined;
    ListProjectCustomFields200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectCustomField>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectCustomFields200Response;
}());
exports.ListProjectCustomFields200Response = ListProjectCustomFields200Response;
//# sourceMappingURL=listProjectCustomFields200Response.js.map