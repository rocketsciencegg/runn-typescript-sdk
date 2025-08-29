"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListUserViews200Response = void 0;
var ListUserViews200Response = (function () {
    function ListUserViews200Response() {
    }
    ListUserViews200Response.getAttributeTypeMap = function () {
        return ListUserViews200Response.attributeTypeMap;
    };
    ListUserViews200Response.discriminator = undefined;
    ListUserViews200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<View>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListUserViews200Response;
}());
exports.ListUserViews200Response = ListUserViews200Response;
//# sourceMappingURL=listUserViews200Response.js.map