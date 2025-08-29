"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonCheckboxCustomFieldRequest = void 0;
var UpdatePersonCheckboxCustomFieldRequest = (function () {
    function UpdatePersonCheckboxCustomFieldRequest() {
    }
    UpdatePersonCheckboxCustomFieldRequest.getAttributeTypeMap = function () {
        return UpdatePersonCheckboxCustomFieldRequest.attributeTypeMap;
    };
    UpdatePersonCheckboxCustomFieldRequest.discriminator = undefined;
    UpdatePersonCheckboxCustomFieldRequest.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "boolean"
        }
    ];
    return UpdatePersonCheckboxCustomFieldRequest;
}());
exports.UpdatePersonCheckboxCustomFieldRequest = UpdatePersonCheckboxCustomFieldRequest;
//# sourceMappingURL=updatePersonCheckboxCustomFieldRequest.js.map