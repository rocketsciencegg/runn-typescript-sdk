"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonDateCustomFieldRequest = void 0;
var UpdatePersonDateCustomFieldRequest = (function () {
    function UpdatePersonDateCustomFieldRequest() {
    }
    UpdatePersonDateCustomFieldRequest.getAttributeTypeMap = function () {
        return UpdatePersonDateCustomFieldRequest.attributeTypeMap;
    };
    UpdatePersonDateCustomFieldRequest.discriminator = undefined;
    UpdatePersonDateCustomFieldRequest.attributeTypeMap = [
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
    return UpdatePersonDateCustomFieldRequest;
}());
exports.UpdatePersonDateCustomFieldRequest = UpdatePersonDateCustomFieldRequest;
//# sourceMappingURL=updatePersonDateCustomFieldRequest.js.map