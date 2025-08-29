"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePersonRequest = void 0;
var CreatePersonRequest = (function () {
    function CreatePersonRequest() {
        this['employmentType'] = CreatePersonRequest.EmploymentTypeEnum.Employee;
    }
    CreatePersonRequest.getAttributeTypeMap = function () {
        return CreatePersonRequest.attributeTypeMap;
    };
    CreatePersonRequest.discriminator = undefined;
    CreatePersonRequest.attributeTypeMap = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "holidaysGroupId",
            "baseName": "holidaysGroupId",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<UpdatePersonRequestTagsInner>"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
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
            "name": "employmentType",
            "baseName": "employmentType",
            "type": "CreatePersonRequest.EmploymentTypeEnum"
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
    return CreatePersonRequest;
}());
exports.CreatePersonRequest = CreatePersonRequest;
(function (CreatePersonRequest) {
    var EmploymentTypeEnum;
    (function (EmploymentTypeEnum) {
        EmploymentTypeEnum[EmploymentTypeEnum["Employee"] = 'employee'] = "Employee";
        EmploymentTypeEnum[EmploymentTypeEnum["Contractor"] = 'contractor'] = "Contractor";
    })(EmploymentTypeEnum = CreatePersonRequest.EmploymentTypeEnum || (CreatePersonRequest.EmploymentTypeEnum = {}));
})(CreatePersonRequest || (exports.CreatePersonRequest = CreatePersonRequest = {}));
//# sourceMappingURL=createPersonRequest.js.map