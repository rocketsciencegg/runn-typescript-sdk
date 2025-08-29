"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionPerson = void 0;
var CollectionPerson = (function () {
    function CollectionPerson() {
    }
    CollectionPerson.getAttributeTypeMap = function () {
        return CollectionPerson.attributeTypeMap;
    };
    CollectionPerson.discriminator = undefined;
    CollectionPerson.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        },
        {
            "name": "holidaysGroupId",
            "baseName": "holidaysGroupId",
            "type": "number"
        },
        {
            "name": "managers",
            "baseName": "managers",
            "type": "Array<CollectionPersonManagersInner>"
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
    return CollectionPerson;
}());
exports.CollectionPerson = CollectionPerson;
//# sourceMappingURL=collectionPerson.js.map