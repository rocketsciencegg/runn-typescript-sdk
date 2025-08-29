"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePlaceholderRequest = void 0;
var CreatePlaceholderRequest = (function () {
    function CreatePlaceholderRequest() {
    }
    CreatePlaceholderRequest.getAttributeTypeMap = function () {
        return CreatePlaceholderRequest.attributeTypeMap;
    };
    CreatePlaceholderRequest.discriminator = undefined;
    CreatePlaceholderRequest.attributeTypeMap = [
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "costPerHour",
            "baseName": "costPerHour",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<UpdatePersonRequestTagsInner>"
        }
    ];
    return CreatePlaceholderRequest;
}());
exports.CreatePlaceholderRequest = CreatePlaceholderRequest;
//# sourceMappingURL=createPlaceholderRequest.js.map