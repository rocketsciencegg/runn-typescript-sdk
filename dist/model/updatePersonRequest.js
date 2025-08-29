"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePersonRequest = void 0;
var UpdatePersonRequest = (function () {
    function UpdatePersonRequest() {
    }
    UpdatePersonRequest.getAttributeTypeMap = function () {
        return UpdatePersonRequest.attributeTypeMap;
    };
    UpdatePersonRequest.discriminator = undefined;
    UpdatePersonRequest.attributeTypeMap = [
        {
            "name": "firstName",
            "baseName": "firstName",
            "type": "string"
        },
        {
            "name": "lastName",
            "baseName": "lastName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<UpdatePersonRequestTagsInner>"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
        }
    ];
    return UpdatePersonRequest;
}());
exports.UpdatePersonRequest = UpdatePersonRequest;
//# sourceMappingURL=updatePersonRequest.js.map