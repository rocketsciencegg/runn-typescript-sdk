"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPhases200Response = void 0;
var ListPhases200Response = (function () {
    function ListPhases200Response() {
    }
    ListPhases200Response.getAttributeTypeMap = function () {
        return ListPhases200Response.attributeTypeMap;
    };
    ListPhases200Response.discriminator = undefined;
    ListPhases200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectPhase>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPhases200Response;
}());
exports.ListPhases200Response = ListPhases200Response;
//# sourceMappingURL=listPhases200Response.js.map