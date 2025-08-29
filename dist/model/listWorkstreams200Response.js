"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListWorkstreams200Response = void 0;
var ListWorkstreams200Response = (function () {
    function ListWorkstreams200Response() {
    }
    ListWorkstreams200Response.getAttributeTypeMap = function () {
        return ListWorkstreams200Response.attributeTypeMap;
    };
    ListWorkstreams200Response.discriminator = undefined;
    ListWorkstreams200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Workstream>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListWorkstreams200Response;
}());
exports.ListWorkstreams200Response = ListWorkstreams200Response;
//# sourceMappingURL=listWorkstreams200Response.js.map