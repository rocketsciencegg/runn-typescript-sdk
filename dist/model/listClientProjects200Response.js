"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListClientProjects200Response = void 0;
var ListClientProjects200Response = (function () {
    function ListClientProjects200Response() {
    }
    ListClientProjects200Response.getAttributeTypeMap = function () {
        return ListClientProjects200Response.attributeTypeMap;
    };
    ListClientProjects200Response.discriminator = undefined;
    ListClientProjects200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Project>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListClientProjects200Response;
}());
exports.ListClientProjects200Response = ListClientProjects200Response;
//# sourceMappingURL=listClientProjects200Response.js.map