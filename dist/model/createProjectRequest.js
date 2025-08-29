"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectRequest = void 0;
var CreateProjectRequest = (function () {
    function CreateProjectRequest() {
    }
    CreateProjectRequest.getAttributeTypeMap = function () {
        return CreateProjectRequest.attributeTypeMap;
    };
    CreateProjectRequest.discriminator = undefined;
    CreateProjectRequest.attributeTypeMap = [
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
            "type": "CreateProjectRequest.PricingModelEnum"
        },
        {
            "name": "rateCardId",
            "baseName": "rateCardId",
            "type": "number"
        },
        {
            "name": "rateType",
            "baseName": "rateType",
            "type": "CreateProjectRequest.RateTypeEnum"
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
        },
        {
            "name": "fromTemplate",
            "baseName": "fromTemplate",
            "type": "CreateProjectRequestAnyOf1FromTemplate"
        }
    ];
    return CreateProjectRequest;
}());
exports.CreateProjectRequest = CreateProjectRequest;
(function (CreateProjectRequest) {
    var PricingModelEnum;
    (function (PricingModelEnum) {
        PricingModelEnum[PricingModelEnum["Fp"] = 'fp'] = "Fp";
        PricingModelEnum[PricingModelEnum["Tm"] = 'tm'] = "Tm";
        PricingModelEnum[PricingModelEnum["Nb"] = 'nb'] = "Nb";
    })(PricingModelEnum = CreateProjectRequest.PricingModelEnum || (CreateProjectRequest.PricingModelEnum = {}));
    var RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hours"] = 'hours'] = "Hours";
        RateTypeEnum[RateTypeEnum["Days"] = 'days'] = "Days";
    })(RateTypeEnum = CreateProjectRequest.RateTypeEnum || (CreateProjectRequest.RateTypeEnum = {}));
})(CreateProjectRequest || (exports.CreateProjectRequest = CreateProjectRequest = {}));
//# sourceMappingURL=createProjectRequest.js.map