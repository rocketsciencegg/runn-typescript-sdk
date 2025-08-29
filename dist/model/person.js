"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
var Person = (function () {
    function Person() {
    }
    Person.getAttributeTypeMap = function () {
        return Person.attributeTypeMap;
    };
    Person.discriminator = undefined;
    Person.attributeTypeMap = [
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
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "notes",
            "baseName": "notes",
            "type": "Array<PersonNotesInner>"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
        },
        {
            "name": "skills",
            "baseName": "skills",
            "type": "Array<PersonSkillsInner>"
        },
        {
            "name": "holidaysGroupId",
            "baseName": "holidaysGroupId",
            "type": "number"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "PersonCustomFields"
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
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map