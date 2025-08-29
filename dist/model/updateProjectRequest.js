"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectRequest = void 0;
var UpdateProjectRequest = (function () {
    function UpdateProjectRequest() {
    }
    UpdateProjectRequest.getAttributeTypeMap = function () {
        return UpdateProjectRequest.attributeTypeMap;
    };
    UpdateProjectRequest.discriminator = undefined;
    UpdateProjectRequest.attributeTypeMap = [
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
            "name": "isArchived",
            "baseName": "isArchived",
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
            "type": "UpdateProjectRequest.PricingModelEnum"
        },
        {
            "name": "rateType",
            "baseName": "rateType",
            "type": "UpdateProjectRequest.RateTypeEnum"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<UpdatePersonRequestTagsInner>"
        },
        {
            "name": "managerIds",
            "baseName": "managerIds",
            "type": "Set<number>"
        }
    ];
    return UpdateProjectRequest;
}());
exports.UpdateProjectRequest = UpdateProjectRequest;
(function (UpdateProjectRequest) {
    var PricingModelEnum;
    (function (PricingModelEnum) {
        PricingModelEnum[PricingModelEnum["Fp"] = 'fp'] = "Fp";
        PricingModelEnum[PricingModelEnum["Tm"] = 'tm'] = "Tm";
        PricingModelEnum[PricingModelEnum["Nb"] = 'nb'] = "Nb";
    })(PricingModelEnum = UpdateProjectRequest.PricingModelEnum || (UpdateProjectRequest.PricingModelEnum = {}));
    var RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hours"] = 'hours'] = "Hours";
        RateTypeEnum[RateTypeEnum["Days"] = 'days'] = "Days";
    })(RateTypeEnum = UpdateProjectRequest.RateTypeEnum || (UpdateProjectRequest.RateTypeEnum = {}));
})(UpdateProjectRequest || (exports.UpdateProjectRequest = UpdateProjectRequest = {}));
//# sourceMappingURL=updateProjectRequest.js.map