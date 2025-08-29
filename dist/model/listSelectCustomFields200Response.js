"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListSelectCustomFields200Response = void 0;
var ListSelectCustomFields200Response = (function () {
    function ListSelectCustomFields200Response() {
    }
    ListSelectCustomFields200Response.getAttributeTypeMap = function () {
        return ListSelectCustomFields200Response.attributeTypeMap;
    };
    ListSelectCustomFields200Response.discriminator = undefined;
    ListSelectCustomFields200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<CustomFieldSelect>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListSelectCustomFields200Response;
}());
exports.ListSelectCustomFields200Response = ListSelectCustomFields200Response;
//# sourceMappingURL=listSelectCustomFields200Response.js.map