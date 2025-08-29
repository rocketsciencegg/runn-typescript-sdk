"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPersonSkills200Response = void 0;
var ListPersonSkills200Response = (function () {
    function ListPersonSkills200Response() {
    }
    ListPersonSkills200Response.getAttributeTypeMap = function () {
        return ListPersonSkills200Response.attributeTypeMap;
    };
    ListPersonSkills200Response.discriminator = undefined;
    ListPersonSkills200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Competency>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPersonSkills200Response;
}());
exports.ListPersonSkills200Response = ListPersonSkills200Response;
//# sourceMappingURL=listPersonSkills200Response.js.map