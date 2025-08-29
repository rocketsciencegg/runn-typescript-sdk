"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListCheckboxCustomFields200Response = void 0;
var ListCheckboxCustomFields200Response = (function () {
    function ListCheckboxCustomFields200Response() {
    }
    ListCheckboxCustomFields200Response.getAttributeTypeMap = function () {
        return ListCheckboxCustomFields200Response.attributeTypeMap;
    };
    ListCheckboxCustomFields200Response.discriminator = undefined;
    ListCheckboxCustomFields200Response.attributeTypeMap = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<CustomFieldCheckbox>"
        },
        {
            "name": "nextCursor",
            "baseName": "nextCursor",
            "type": "string"
        }
    ];
    return ListCheckboxCustomFields200Response;
}());
exports.ListCheckboxCustomFields200Response = ListCheckboxCustomFields200Response;
//# sourceMappingURL=listCheckboxCustomFields200Response.js.map