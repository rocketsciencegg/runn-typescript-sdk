"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contract = void 0;
var Contract = (function () {
    function Contract() {
    }
    Contract.getAttributeTypeMap = function () {
        return Contract.attributeTypeMap;
    };
    Contract.discriminator = undefined;
    Contract.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "costPerHour",
            "baseName": "costPerHour",
            "type": "number"
        },
        {
            "name": "employmentType",
            "baseName": "employmentType",
            "type": "string"
        },
        {
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
        },
        {
            "name": "rosteredDays",
            "baseName": "rosteredDays",
            "type": "RosteredDays"
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
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
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
    return Contract;
}());
exports.Contract = Contract;
//# sourceMappingURL=contract.js.map