"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event = void 0;
var Event = (function () {
    function Event() {
    }
    Event.getAttributeTypeMap = function () {
        return Event.attributeTypeMap;
    };
    Event.discriminator = "type";
    Event.attributeTypeMap = [
        {
            "name": "eventId",
            "baseName": "eventId",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "Event.TypeEnum"
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
            "name": "project",
            "baseName": "project",
            "type": "EventProjectDeletedProject"
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "EventPersonDeletedPerson"
        },
        {
            "name": "contract",
            "baseName": "contract",
            "type": "EventContractDeletedContract"
        },
        {
            "name": "actual",
            "baseName": "actual",
            "type": "EventActualDeletedActual"
        },
        {
            "name": "timeOff",
            "baseName": "timeOff",
            "type": "EventTimeOffDeletedTimeOff"
        },
        {
            "name": "assignment",
            "baseName": "assignment",
            "type": "EventAssignmentDeletedAssignment"
        }
    ];
    return Event;
}());
exports.Event = Event;
(function (Event) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["ProjectDeleted"] = 'project_deleted'] = "ProjectDeleted";
        TypeEnum[TypeEnum["PersonDeleted"] = 'person_deleted'] = "PersonDeleted";
        TypeEnum[TypeEnum["ContractDeleted"] = 'contract_deleted'] = "ContractDeleted";
        TypeEnum[TypeEnum["ActualDeleted"] = 'actual_deleted'] = "ActualDeleted";
        TypeEnum[TypeEnum["TimeOffDeleted"] = 'time_off_deleted'] = "TimeOffDeleted";
        TypeEnum[TypeEnum["AssignmentDeleted"] = 'assignment_deleted'] = "AssignmentDeleted";
    })(TypeEnum = Event.TypeEnum || (Event.TypeEnum = {}));
})(Event || (exports.Event = Event = {}));
//# sourceMappingURL=event.js.map