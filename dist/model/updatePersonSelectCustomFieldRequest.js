"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonSelectCustomFieldRequest = void 0;
var UpdatePersonSelectCustomFieldRequest = (function () {
    function UpdatePersonSelectCustomFieldRequest() {
    }
    UpdatePersonSelectCustomFieldRequest.getAttributeTypeMap = function () {
        return UpdatePersonSelectCustomFieldRequest.attributeTypeMap;
    };
    UpdatePersonSelectCustomFieldRequest.discriminator = undefined;
    UpdatePersonSelectCustomFieldRequest.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<UpdatePersonSelectCustomFieldRequestValuesInner>"
        }
    ];
    return UpdatePersonSelectCustomFieldRequest;
}());
exports.UpdatePersonSelectCustomFieldRequest = UpdatePersonSelectCustomFieldRequest;
//# sourceMappingURL=updatePersonSelectCustomFieldRequest.js.map