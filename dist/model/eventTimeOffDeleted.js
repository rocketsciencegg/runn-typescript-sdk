"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventTimeOffDeleted = void 0;
var EventTimeOffDeleted = (function () {
    function EventTimeOffDeleted() {
    }
    EventTimeOffDeleted.getAttributeTypeMap = function () {
        return EventTimeOffDeleted.attributeTypeMap;
    };
    EventTimeOffDeleted.discriminator = undefined;
    EventTimeOffDeleted.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventTimeOffDeleted.TypeEnum"
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
            "name": "timeOff",
            "baseName": "timeOff",
            "type": "EventTimeOffDeletedTimeOff"
        }
    ];
    return EventTimeOffDeleted;
}());
exports.EventTimeOffDeleted = EventTimeOffDeleted;
(function (EventTimeOffDeleted) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["TimeOffDeleted"] = 'time_off_deleted'] = "TimeOffDeleted";
    })(TypeEnum = EventTimeOffDeleted.TypeEnum || (EventTimeOffDeleted.TypeEnum = {}));
})(EventTimeOffDeleted || (exports.EventTimeOffDeleted = EventTimeOffDeleted = {}));
//# sourceMappingURL=eventTimeOffDeleted.js.map