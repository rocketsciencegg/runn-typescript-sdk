"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventActualDeleted = void 0;
var EventActualDeleted = (function () {
    function EventActualDeleted() {
    }
    EventActualDeleted.getAttributeTypeMap = function () {
        return EventActualDeleted.attributeTypeMap;
    };
    EventActualDeleted.discriminator = undefined;
    EventActualDeleted.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventActualDeleted.TypeEnum"
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
            "name": "actual",
            "baseName": "actual",
            "type": "EventActualDeletedActual"
        }
    ];
    return EventActualDeleted;
}());
exports.EventActualDeleted = EventActualDeleted;
(function (EventActualDeleted) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ActualDeleted"] = 'actual_deleted'] = "ActualDeleted";
    })(TypeEnum = EventActualDeleted.TypeEnum || (EventActualDeleted.TypeEnum = {}));
})(EventActualDeleted || (exports.EventActualDeleted = EventActualDeleted = {}));
//# sourceMappingURL=eventActualDeleted.js.map