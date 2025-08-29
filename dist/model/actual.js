"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Actual = void 0;
var Actual = (function () {
    function Actual() {
    }
    Actual.getAttributeTypeMap = function () {
        return Actual.attributeTypeMap;
    };
    Actual.discriminator = undefined;
    Actual.attributeTypeMap = [
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
    return Actual;
}());
exports.Actual = Actual;
//# sourceMappingURL=actual.js.map