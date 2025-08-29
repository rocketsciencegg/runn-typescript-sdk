"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPersonDeleted = void 0;
var EventPersonDeleted = (function () {
    function EventPersonDeleted() {
    }
    EventPersonDeleted.getAttributeTypeMap = function () {
        return EventPersonDeleted.attributeTypeMap;
    };
    EventPersonDeleted.discriminator = undefined;
    EventPersonDeleted.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventPersonDeleted.TypeEnum"
        },
        {
            "name": "actor",
            "baseName": "actor",
            "type": "Actor"
        },
        {
            "name": "timestamp",
            "baseName": "timestamp",
            "type": "Date"
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "EventPersonDeletedPerson"
        }
    ];
    return EventPersonDeleted;
}());
exports.EventPersonDeleted = EventPersonDeleted;
(function (EventPersonDeleted) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["PersonDeleted"] = 'person_deleted'] = "PersonDeleted";
    })(TypeEnum = EventPersonDeleted.TypeEnum || (EventPersonDeleted.TypeEnum = {}));
})(EventPersonDeleted || (exports.EventPersonDeleted = EventPersonDeleted = {}));
//# sourceMappingURL=eventPersonDeleted.js.map