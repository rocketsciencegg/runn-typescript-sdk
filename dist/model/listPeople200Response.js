"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPeople200Response = void 0;
var ListPeople200Response = (function () {
    function ListPeople200Response() {
    }
    ListPeople200Response.getAttributeTypeMap = function () {
        return ListPeople200Response.attributeTypeMap;
    };
    ListPeople200Response.discriminator = undefined;
    ListPeople200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<CollectionPerson>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListPeople200Response;
}());
exports.ListPeople200Response = ListPeople200Response;
//# sourceMappingURL=listPeople200Response.js.map