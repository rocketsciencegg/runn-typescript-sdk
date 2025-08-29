"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActualTimeEntry = void 0;
var ActualTimeEntry = (function () {
    function ActualTimeEntry() {
        this['billableMinutes'] = 0;
        this['nonbillableMinutes'] = 0;
    }
    ActualTimeEntry.getAttributeTypeMap = function () {
        return ActualTimeEntry.attributeTypeMap;
    };
    ActualTimeEntry.discriminator = undefined;
    ActualTimeEntry.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "billableMinutes",
            "baseName": "billableMinutes",
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
            "name": "nonbillableMinutes",
            "baseName": "nonbillableMinutes",
            "type": "number"
        },
        {
            "name": "phaseId",
            "baseName": "phaseId",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        }
    ];
    return ActualTimeEntry;
}());
exports.ActualTimeEntry = ActualTimeEntry;
//# sourceMappingURL=actualTimeEntry.js.map