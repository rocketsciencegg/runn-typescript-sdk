"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContractRequest = void 0;
var UpdateContractRequest = (function () {
    function UpdateContractRequest() {
    }
    UpdateContractRequest.getAttributeTypeMap = function () {
        return UpdateContractRequest.attributeTypeMap;
    };
    UpdateContractRequest.discriminator = undefined;
    UpdateContractRequest.attributeTypeMap = [
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
            "type": "UpdateContractRequest.EmploymentTypeEnum"
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
            "type": "UpdateContractRequestRosteredDays"
        },
        {
            "name": "jobTitle",
            "baseName": "jobTitle",
            "type": "string"
        }
    ];
    return UpdateContractRequest;
}());
exports.UpdateContractRequest = UpdateContractRequest;
(function (UpdateContractRequest) {
    var EmploymentTypeEnum;
    (function (EmploymentTypeEnum) {
        EmploymentTypeEnum[EmploymentTypeEnum["Employee"] = 'employee'] = "Employee";
        EmploymentTypeEnum[EmploymentTypeEnum["Contractor"] = 'contractor'] = "Contractor";
    })(EmploymentTypeEnum = UpdateContractRequest.EmploymentTypeEnum || (UpdateContractRequest.EmploymentTypeEnum = {}));
})(UpdateContractRequest || (exports.UpdateContractRequest = UpdateContractRequest = {}));
//# sourceMappingURL=updateContractRequest.js.map