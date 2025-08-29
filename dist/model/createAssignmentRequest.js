"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAssignmentRequest = void 0;
var CreateAssignmentRequest = (function () {
    function CreateAssignmentRequest() {
        this['minutesPerDay'] = 0;
        this['isBillable'] = true;
    }
    CreateAssignmentRequest.getAttributeTypeMap = function () {
        return CreateAssignmentRequest.attributeTypeMap;
    };
    CreateAssignmentRequest.discriminator = undefined;
    CreateAssignmentRequest.attributeTypeMap = [
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
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
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
            "name": "isNonWorkingDay",
            "baseName": "isNonWorkingDay",
            "type": "boolean"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        }
    ];
    return CreateAssignmentRequest;
}());
exports.CreateAssignmentRequest = CreateAssignmentRequest;
//# sourceMappingURL=createAssignmentRequest.js.map