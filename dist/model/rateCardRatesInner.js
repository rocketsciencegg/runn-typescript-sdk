"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateCardRatesInner = void 0;
var RateCardRatesInner = (function () {
    function RateCardRatesInner() {
    }
    RateCardRatesInner.getAttributeTypeMap = function () {
        return RateCardRatesInner.attributeTypeMap;
    };
    RateCardRatesInner.discriminator = undefined;
    RateCardRatesInner.attributeTypeMap = [
        {
            "name": "role",
            "baseName": "role",
            "type": "RateCardRatesInnerRole"
        },
        {
            "name": "rateHourly",
            "baseName": "rateHourly",
            "type": "number"
        },
        {
            "name": "rateDaily",
            "baseName": "rateDaily",
            "type": "number"
        }
    ];
    return RateCardRatesInner;
}());
exports.RateCardRatesInner = RateCardRatesInner;
//# sourceMappingURL=rateCardRatesInner.js.map