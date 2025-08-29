"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateCard = void 0;
var RateCard = (function () {
    function RateCard() {
    }
    RateCard.getAttributeTypeMap = function () {
        return RateCard.attributeTypeMap;
    };
    RateCard.discriminator = undefined;
    RateCard.attributeTypeMap = [
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
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
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
            "type": "RateCard.RateTypeEnum"
        },
        {
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Array<number>"
        },
        {
            "name": "rates",
            "baseName": "rates",
            "type": "Array<RateCardRatesInner>"
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
    return RateCard;
}());
exports.RateCard = RateCard;
(function (RateCard) {
    var RateTypeEnum;
    (function (RateTypeEnum) {
        RateTypeEnum[RateTypeEnum["Hours"] = 'hours'] = "Hours";
        RateTypeEnum[RateTypeEnum["Days"] = 'days'] = "Days";
    })(RateTypeEnum = RateCard.RateTypeEnum || (RateCard.RateTypeEnum = {}));
})(RateCard || (exports.RateCard = RateCard = {}));
//# sourceMappingURL=rateCard.js.map