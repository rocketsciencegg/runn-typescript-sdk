"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectRequestAnyOf = void 0;
var CreateProjectRequestAnyOf = (function () {
    function CreateProjectRequestAnyOf() {
    }
    CreateProjectRequestAnyOf.getAttributeTypeMap = function () {
        return CreateProjectRequestAnyOf.attributeTypeMap;
    };
    CreateProjectRequestAnyOf.discriminator = undefined;
    CreateProjectRequestAnyOf.attributeTypeMap = [
        {
            "name": "emoji",
            "baseName": "emoji",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "isConfirmed",
            "baseName": "isConfirmed",
            "type": "boolean"
        },
        {
            "name": "isTemplate",
            "baseName": "isTemplate",
            "type": "boolean"
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
            "name": "clientId",
            "baseName": "clientId",
            "type": "number"
        },
        {
            "name": "teamId",
            "baseName": "teamId",
            "type": "number"
        },
        {
            "name": "pricingModel",
            "baseName": "pricingModel",
            "type": "CreateProjectRequestAnyOf.PricingModelEnum"
        },
        {
            "name": "rateCardId",
            "baseName": "rateCardId",
            "type": "number"
        },
        {
            "name": "rateType",
            "baseName": "rateType",
            "type": "CreateProjectRequestAnyOf.RateTypeEnum"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "managerIds",
            "baseName": "managerIds",
            "type": "Set<number>"
        }
    ];
    return CreateProjectRequestAnyOf;
}());
exports.CreateProjectRequestAnyOf = CreateProjectRequestAnyOf;
(function (CreateProjectRequestAnyOf) {
    var PricingModelEnum;
    (function (PricingModelEnum) {
        PricingModelEnum[PricingModelEnum["Fp"] = 'fp'] = "Fp";
        PricingModelEnum[PricingModelEnum["Tm"] = 'tm'] = "Tm";
        PricingModelEnum[PricingModelEnum["Nb"] = 'nb'] = "Nb";
    })(PricingModelEnum = CreateProjectRequestAnyOf.PricingModelEnum || (CreateProjectRequestAnyOf.PricingModelEnum = {}));
    var RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hours"] = 'hours'] = "Hours";
        RateTypeEnum[RateTypeEnum["Days"] = 'days'] = "Days";
    })(RateTypeEnum = CreateProjectRequestAnyOf.RateTypeEnum || (CreateProjectRequestAnyOf.RateTypeEnum = {}));
})(CreateProjectRequestAnyOf || (exports.CreateProjectRequestAnyOf = CreateProjectRequestAnyOf = {}));
//# sourceMappingURL=createProjectRequestAnyOf.js.map