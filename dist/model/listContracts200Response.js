"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListContracts200Response = void 0;
var ListContracts200Response = (function () {
    function ListContracts200Response() {
    }
    ListContracts200Response.getAttributeTypeMap = function () {
        return ListContracts200Response.attributeTypeMap;
    };
    ListContracts200Response.discriminator = undefined;
    ListContracts200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<Contract>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListContracts200Response;
}());
exports.ListContracts200Response = ListContracts200Response;
//# sourceMappingURL=listContracts200Response.js.map