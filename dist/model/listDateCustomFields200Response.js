"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListDateCustomFields200Response = void 0;
var ListDateCustomFields200Response = (function () {
    function ListDateCustomFields200Response() {
    }
    ListDateCustomFields200Response.getAttributeTypeMap = function () {
        return ListDateCustomFields200Response.attributeTypeMap;
    };
    ListDateCustomFields200Response.discriminator = undefined;
    ListDateCustomFields200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<CustomFieldDate>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListDateCustomFields200Response;
}());
exports.ListDateCustomFields200Response = ListDateCustomFields200Response;
//# sourceMappingURL=listDateCustomFields200Response.js.map