"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventSubresourcePerson = void 0;
var EventSubresourcePerson = (function () {
    function EventSubresourcePerson() {
    }
    EventSubresourcePerson.getAttributeTypeMap = function () {
        return EventSubresourcePerson.attributeTypeMap;
    };
    EventSubresourcePerson.discriminator = undefined;
    EventSubresourcePerson.attributeTypeMap = [
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
            "name": "isPlaceholder",
            "baseName": "isPlaceholder",
            "type": "boolean"
        }
    ];
    return EventSubresourcePerson;
}());
exports.EventSubresourcePerson = EventSubresourcePerson;
//# sourceMappingURL=eventSubresourcePerson.js.map