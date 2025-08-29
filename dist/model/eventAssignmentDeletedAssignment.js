"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventAssignmentDeletedAssignment = void 0;
var EventAssignmentDeletedAssignment = (function () {
    function EventAssignmentDeletedAssignment() {
    }
    EventAssignmentDeletedAssignment.getAttributeTypeMap = function () {
        return EventAssignmentDeletedAssignment.attributeTypeMap;
    };
    EventAssignmentDeletedAssignment.discriminator = undefined;
    EventAssignmentDeletedAssignment.attributeTypeMap = [
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
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "isActive",
            "baseName": "isActive",
            "type": "boolean"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "isBillable",
            "baseName": "isBillable",
            "type": "boolean"
        },
        {
            "name": "phaseId",
            "baseName": "phaseId",
            "type": "number"
        },
        {
            "name": "isNonWorkingDay",
            "baseName": "isNonWorkingDay",
            "type": "boolean"
        },
        {
            "name": "isTemplate",
            "baseName": "isTemplate",
            "type": "boolean"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "EventSubresourceProject"
        },
        {
            "name": "person",
            "baseName": "person",
            "type": "EventSubresourcePerson"
        },
        {
            "name": "role",
            "baseName": "role",
            "type": "EventSubresourceRole"
        },
        {
            "name": "phase",
            "baseName": "phase",
            "type": "EventSubresourcePhase"
        },
        {
            "name": "workstream",
            "baseName": "workstream",
            "type": "EventSubresourceWorkstream"
        }
    ];
    return EventAssignmentDeletedAssignment;
}());
exports.EventAssignmentDeletedAssignment = EventAssignmentDeletedAssignment;
//# sourceMappingURL=eventAssignmentDeletedAssignment.js.map