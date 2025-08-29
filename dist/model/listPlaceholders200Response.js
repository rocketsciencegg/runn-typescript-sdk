"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPlaceholders200Response = void 0;
var ListPlaceholders200Response = (function () {
    function ListPlaceholders200Response() {
    }
    ListPlaceholders200Response.getAttributeTypeMap = function () {
        return ListPlaceholders200Response.attributeTypeMap;
    };
    ListPlaceholders200Response.discriminator = undefined;
    ListPlaceholders200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Placeholder>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPlaceholders200Response;
}());
exports.ListPlaceholders200Response = ListPlaceholders200Response;
//# sourceMappingURL=listPlaceholders200Response.js.map