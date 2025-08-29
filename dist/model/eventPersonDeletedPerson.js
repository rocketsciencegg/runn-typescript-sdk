"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPersonDeletedPerson = void 0;
var EventPersonDeletedPerson = (function () {
    function EventPersonDeletedPerson() {
    }
    EventPersonDeletedPerson.getAttributeTypeMap = function () {
        return EventPersonDeletedPerson.attributeTypeMap;
    };
    EventPersonDeletedPerson.discriminator = undefined;
    EventPersonDeletedPerson.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
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
        }
    ];
    return EventPersonDeletedPerson;
}());
exports.EventPersonDeletedPerson = EventPersonDeletedPerson;
//# sourceMappingURL=eventPersonDeletedPerson.js.map