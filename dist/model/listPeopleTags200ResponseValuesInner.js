"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPeopleTags200ResponseValuesInner = void 0;
var ListPeopleTags200ResponseValuesInner = (function () {
    function ListPeopleTags200ResponseValuesInner() {
    }
    ListPeopleTags200ResponseValuesInner.getAttributeTypeMap = function () {
        return ListPeopleTags200ResponseValuesInner.attributeTypeMap;
    };
    ListPeopleTags200ResponseValuesInner.discriminator = undefined;
    ListPeopleTags200ResponseValuesInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return ListPeopleTags200ResponseValuesInner;
}());
exports.ListPeopleTags200ResponseValuesInner = ListPeopleTags200ResponseValuesInner;
//# sourceMappingURL=listPeopleTags200ResponseValuesInner.js.map