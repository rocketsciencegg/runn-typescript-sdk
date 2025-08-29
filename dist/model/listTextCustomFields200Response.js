"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListTextCustomFields200Response = void 0;
var ListTextCustomFields200Response = (function () {
    function ListTextCustomFields200Response() {
    }
    ListTextCustomFields200Response.getAttributeTypeMap = function () {
        return ListTextCustomFields200Response.attributeTypeMap;
    };
    ListTextCustomFields200Response.discriminator = undefined;
    ListTextCustomFields200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<CustomFieldText>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListTextCustomFields200Response;
}());
exports.ListTextCustomFields200Response = ListTextCustomFields200Response;
//# sourceMappingURL=listTextCustomFields200Response.js.map