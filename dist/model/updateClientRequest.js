"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateClientRequest = void 0;
var UpdateClientRequest = (function () {
    function UpdateClientRequest() {
    }
    UpdateClientRequest.getAttributeTypeMap = function () {
        return UpdateClientRequest.attributeTypeMap;
    };
    UpdateClientRequest.discriminator = undefined;
    UpdateClientRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "website",
            "baseName": "website",
            "type": "string"
        },
        {
            "name": "isArchived",
            "baseName": "isArchived",
            "type": "boolean"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        }
    ];
    return UpdateClientRequest;
}());
exports.UpdateClientRequest = UpdateClientRequest;
//# sourceMappingURL=updateClientRequest.js.map