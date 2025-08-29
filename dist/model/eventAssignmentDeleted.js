"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAssignmentDeleted = void 0;
var EventAssignmentDeleted = (function () {
    function EventAssignmentDeleted() {
    }
    EventAssignmentDeleted.getAttributeTypeMap = function () {
        return EventAssignmentDeleted.attributeTypeMap;
    };
    EventAssignmentDeleted.discriminator = undefined;
    EventAssignmentDeleted.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "EventAssignmentDeleted.TypeEnum"
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
            "name": "assignment",
            "baseName": "assignment",
            "type": "EventAssignmentDeletedAssignment"
        }
    ];
    return EventAssignmentDeleted;
}());
exports.EventAssignmentDeleted = EventAssignmentDeleted;
(function (EventAssignmentDeleted) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["AssignmentDeleted"] = 'assignment_deleted'] = "AssignmentDeleted";
    })(TypeEnum = EventAssignmentDeleted.TypeEnum || (EventAssignmentDeleted.TypeEnum = {}));
})(EventAssignmentDeleted || (exports.EventAssignmentDeleted = EventAssignmentDeleted = {}));
//# sourceMappingURL=eventAssignmentDeleted.js.map