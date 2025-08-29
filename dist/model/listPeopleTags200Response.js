"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPeopleTags200Response = void 0;
var ListPeopleTags200Response = (function () {
    function ListPeopleTags200Response() {
    }
    ListPeopleTags200Response.getAttributeTypeMap = function () {
        return ListPeopleTags200Response.attributeTypeMap;
    };
    ListPeopleTags200Response.discriminator = undefined;
    ListPeopleTags200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<ListPeopleTags200ResponseValuesInner>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPeopleTags200Response;
}());
exports.ListPeopleTags200Response = ListPeopleTags200Response;
//# sourceMappingURL=listPeopleTags200Response.js.map