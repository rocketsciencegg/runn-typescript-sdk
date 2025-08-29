"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractInput = void 0;
var ContractInput = (function () {
    function ContractInput() {
        this['employmentType'] = ContractInput.EmploymentTypeEnum.Employee;
    }
    ContractInput.getAttributeTypeMap = function () {
        return ContractInput.attributeTypeMap;
    };
    ContractInput.discriminator = undefined;
    ContractInput.attributeTypeMap = [
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
            "name": "employmentType",
            "baseName": "employmentType",
            "type": "ContractInput.EmploymentTypeEnum"
        },
        {
            "name": "costPerHour",
            "baseName": "costPerHour",
            "type": "number"
        },
        {
            "name": "minutesPerDay",
            "baseName": "minutesPerDay",
            "type": "number"
        },
        {
            "name": "rosteredDays",
            "baseName": "rosteredDays",
            "type": "CreatePersonRequestRosteredDays"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        }
    ];
    return ContractInput;
}());
exports.ContractInput = ContractInput;
(function (ContractInput) {
    var EmploymentTypeEnum;
    (function (EmploymentTypeEnum) {
        EmploymentTypeEnum[EmploymentTypeEnum["Employee"] = 'employee'] = "Employee";
        EmploymentTypeEnum[EmploymentTypeEnum["Contractor"] = 'contractor'] = "Contractor";
    })(EmploymentTypeEnum = ContractInput.EmploymentTypeEnum || (ContractInput.EmploymentTypeEnum = {}));
})(ContractInput || (exports.ContractInput = ContractInput = {}));
//# sourceMappingURL=contractInput.js.map