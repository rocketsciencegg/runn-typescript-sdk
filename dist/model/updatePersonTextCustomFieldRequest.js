"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonTextCustomFieldRequest = void 0;
var UpdatePersonTextCustomFieldRequest = (function () {
    function UpdatePersonTextCustomFieldRequest() {
    }
    UpdatePersonTextCustomFieldRequest.getAttributeTypeMap = function () {
        return UpdatePersonTextCustomFieldRequest.attributeTypeMap;
    };
    UpdatePersonTextCustomFieldRequest.discriminator = undefined;
    UpdatePersonTextCustomFieldRequest.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "value",
            "baseName": "value",
            "type": "string"
        }
    ];
    return UpdatePersonTextCustomFieldRequest;
}());
exports.UpdatePersonTextCustomFieldRequest = UpdatePersonTextCustomFieldRequest;
//# sourceMappingURL=updatePersonTextCustomFieldRequest.js.map