"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTimeOffDeletedTimeOff = void 0;
var EventTimeOffDeletedTimeOff = (function () {
    function EventTimeOffDeletedTimeOff() {
    }
    EventTimeOffDeletedTimeOff.getAttributeTypeMap = function () {
        return EventTimeOffDeletedTimeOff.attributeTypeMap;
    };
    EventTimeOffDeletedTimeOff.discriminator = undefined;
    EventTimeOffDeletedTimeOff.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "EventSubresourcePerson"
        }
    ];
    return EventTimeOffDeletedTimeOff;
}());
exports.EventTimeOffDeletedTimeOff = EventTimeOffDeletedTimeOff;
//# sourceMappingURL=eventTimeOffDeletedTimeOff.js.map