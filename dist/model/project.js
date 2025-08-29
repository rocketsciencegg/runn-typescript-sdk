"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
var Project = (function () {
    function Project() {
    }
    Project.getAttributeTypeMap = function () {
        return Project.attributeTypeMap;
    };
    Project.discriminator = undefined;
    Project.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "isTemplate",
            "baseName": "isTemplate",
            "type": "boolean"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
        },
        {
            "name": "isConfirmed",
            "baseName": "isConfirmed",
            "type": "boolean"
        },
        {
            "name": "pricingModel",
            "baseName": "pricingModel",
            "type": "Project.PricingModelEnum"
        },
        {
            "name": "rateType",
            "baseName": "rateType",
            "type": "Project.RateTypeEnum"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number"
        },
        {
            "name": "budget",
            "baseName": "budget",
            "type": "number"
        },
        {
            "name": "expensesBudget",
            "baseName": "expensesBudget",
            "type": "number"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "clientId",
            "baseName": "clientId",
            "type": "number"
        },
        {
            "name": "rateCardId",
            "baseName": "rateCardId",
            "type": "number"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "PersonCustomFields"
        },
        {
            "name": "managerIds",
            "baseName": "managerIds",
            "type": "Array<number>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<Tag>"
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
    return Project;
}());
exports.Project = Project;
(function (Project) {
    var PricingModelEnum;
    (function (PricingModelEnum) {
        PricingModelEnum[PricingModelEnum["Fp"] = 'fp'] = "Fp";
        PricingModelEnum[PricingModelEnum["Tm"] = 'tm'] = "Tm";
        PricingModelEnum[PricingModelEnum["Nb"] = 'nb'] = "Nb";
    })(PricingModelEnum = Project.PricingModelEnum || (Project.PricingModelEnum = {}));
    var RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hours"] = 'hours'] = "Hours";
        RateTypeEnum[RateTypeEnum["Days"] = 'days'] = "Days";
    })(RateTypeEnum = Project.RateTypeEnum || (Project.RateTypeEnum = {}));
})(Project || (exports.Project = Project = {}));
//# sourceMappingURL=project.js.map