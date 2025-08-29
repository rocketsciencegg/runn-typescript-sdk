"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventActualDeletedActual = void 0;
var EventActualDeletedActual = (function () {
    function EventActualDeletedActual() {
    }
    EventActualDeletedActual.getAttributeTypeMap = function () {
        return EventActualDeletedActual.attributeTypeMap;
    };
    EventActualDeletedActual.discriminator = undefined;
    EventActualDeletedActual.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "phaseId",
            "baseName": "phaseId",
            "type": "number"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        },
        {
            "name": "billableMinutes",
            "baseName": "billableMinutes",
            "type": "number"
        },
        {
            "name": "nonbillableMinutes",
            "baseName": "nonbillableMinutes",
            "type": "number"
        },
        {
            "name": "billableNote",
            "baseName": "billableNote",
            "type": "string"
        },
        {
            "name": "nonbillableNote",
            "baseName": "nonbillableNote",
            "type": "string"
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
            "name": "project",
            "baseName": "project",
            "type": "EventSubresourceProject"
        },
        {
            "name": "workstream",
            "baseName": "workstream",
            "type": "EventSubresourceWorkstream"
        }
    ];
    return EventActualDeletedActual;
}());
exports.EventActualDeletedActual = EventActualDeletedActual;
//# sourceMappingURL=eventActualDeletedActual.js.map