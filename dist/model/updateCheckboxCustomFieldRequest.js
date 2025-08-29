"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCheckboxCustomFieldRequest = void 0;
var UpdateCheckboxCustomFieldRequest = (function () {
    function UpdateCheckboxCustomFieldRequest() {
    }
    UpdateCheckboxCustomFieldRequest.getAttributeTypeMap = function () {
        return UpdateCheckboxCustomFieldRequest.attributeTypeMap;
    };
    UpdateCheckboxCustomFieldRequest.discriminator = undefined;
    UpdateCheckboxCustomFieldRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "required",
            "baseName": "required",
            "type": "boolean"
        },
        {
            "name": "showInPlanner",
            "baseName": "showInPlanner",
            "type": "boolean"
        },
        {
            "name": "filterableInPlanner",
            "baseName": "filterableInPlanner",
            "type": "boolean"
        }
    ];
    return UpdateCheckboxCustomFieldRequest;
}());
exports.UpdateCheckboxCustomFieldRequest = UpdateCheckboxCustomFieldRequest;
//# sourceMappingURL=updateCheckboxCustomFieldRequest.js.map