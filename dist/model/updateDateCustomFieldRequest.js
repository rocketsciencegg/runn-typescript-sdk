"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDateCustomFieldRequest = void 0;
var UpdateDateCustomFieldRequest = (function () {
    function UpdateDateCustomFieldRequest() {
    }
    UpdateDateCustomFieldRequest.getAttributeTypeMap = function () {
        return UpdateDateCustomFieldRequest.attributeTypeMap;
    };
    UpdateDateCustomFieldRequest.discriminator = undefined;
    UpdateDateCustomFieldRequest.attributeTypeMap = [
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
    return UpdateDateCustomFieldRequest;
}());
exports.UpdateDateCustomFieldRequest = UpdateDateCustomFieldRequest;
//# sourceMappingURL=updateDateCustomFieldRequest.js.map