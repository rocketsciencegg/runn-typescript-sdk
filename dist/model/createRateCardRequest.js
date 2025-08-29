"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRateCardRequest = void 0;
var CreateRateCardRequest = (function () {
    function CreateRateCardRequest() {
    }
    CreateRateCardRequest.getAttributeTypeMap = function () {
        return CreateRateCardRequest.attributeTypeMap;
    };
    CreateRateCardRequest.discriminator = undefined;
    CreateRateCardRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<CreateRateCardRequestReferencesInner>"
        },
        {
            "name": "isBlendedRateCard",
            "baseName": "isBlendedRateCard",
            "type": "boolean"
        },
        {
            "name": "blendedRate",
            "baseName": "blendedRate",
            "type": "number"
        },
        {
            "name": "rateType",
            "baseName": "rateType",
            "type": "CreateRateCardRequest.RateTypeEnum"
        }
    ];
    return CreateRateCardRequest;
}());
exports.CreateRateCardRequest = CreateRateCardRequest;
(function (CreateRateCardRequest) {
    var RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hours"] = 'hours'] = "Hours";
        RateTypeEnum[RateTypeEnum["Days"] = 'days'] = "Days";
    })(RateTypeEnum = CreateRateCardRequest.RateTypeEnum || (CreateRateCardRequest.RateTypeEnum = {}));
})(CreateRateCardRequest || (exports.CreateRateCardRequest = CreateRateCardRequest = {}));
//# sourceMappingURL=createRateCardRequest.js.map