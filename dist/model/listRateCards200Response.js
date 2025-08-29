"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListRateCards200Response = void 0;
var ListRateCards200Response = (function () {
    function ListRateCards200Response() {
    }
    ListRateCards200Response.getAttributeTypeMap = function () {
        return ListRateCards200Response.attributeTypeMap;
    };
    ListRateCards200Response.discriminator = undefined;
    ListRateCards200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<RateCard>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListRateCards200Response;
}());
exports.ListRateCards200Response = ListRateCards200Response;
//# sourceMappingURL=listRateCards200Response.js.map