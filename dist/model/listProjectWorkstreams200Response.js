"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProjectWorkstreams200Response = void 0;
var ListProjectWorkstreams200Response = (function () {
    function ListProjectWorkstreams200Response() {
    }
    ListProjectWorkstreams200Response.getAttributeTypeMap = function () {
        return ListProjectWorkstreams200Response.attributeTypeMap;
    };
    ListProjectWorkstreams200Response.discriminator = undefined;
    ListProjectWorkstreams200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ListProjectWorkstreams200ResponseValuesInner>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListProjectWorkstreams200Response;
}());
exports.ListProjectWorkstreams200Response = ListProjectWorkstreams200Response;
//# sourceMappingURL=listProjectWorkstreams200Response.js.map