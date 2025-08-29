"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Assignment = void 0;
var Assignment = (function () {
    function Assignment() {
    }
    Assignment.getAttributeTypeMap = function () {
        return Assignment.attributeTypeMap;
    };
    Assignment.discriminator = undefined;
    Assignment.attributeTypeMap = [
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
            "name": "isPlaceholder",
            "baseName": "isPlaceholder",
            "type": "boolean"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return Assignment;
}());
exports.Assignment = Assignment;
//# sourceMappingURL=assignment.js.map