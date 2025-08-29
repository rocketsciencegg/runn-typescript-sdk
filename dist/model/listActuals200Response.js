"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListActuals200Response = void 0;
var ListActuals200Response = (function () {
    function ListActuals200Response() {
    }
    ListActuals200Response.getAttributeTypeMap = function () {
        return ListActuals200Response.attributeTypeMap;
    };
    ListActuals200Response.discriminator = undefined;
    ListActuals200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Actual>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListActuals200Response;
}());
exports.ListActuals200Response = ListActuals200Response;
//# sourceMappingURL=listActuals200Response.js.map