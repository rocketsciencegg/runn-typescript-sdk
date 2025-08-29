"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectWorkstreamsForProject200Response = void 0;
var ListProjectWorkstreamsForProject200Response = (function () {
    function ListProjectWorkstreamsForProject200Response() {
    }
    ListProjectWorkstreamsForProject200Response.getAttributeTypeMap = function () {
        return ListProjectWorkstreamsForProject200Response.attributeTypeMap;
    };
    ListProjectWorkstreamsForProject200Response.discriminator = undefined;
    ListProjectWorkstreamsForProject200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ProjectWorkstream>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectWorkstreamsForProject200Response;
}());
exports.ListProjectWorkstreamsForProject200Response = ListProjectWorkstreamsForProject200Response;
//# sourceMappingURL=listProjectWorkstreamsForProject200Response.js.map