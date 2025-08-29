"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateClientsBulkRequest = void 0;
var CreateClientsBulkRequest = (function () {
    function CreateClientsBulkRequest() {
    }
    CreateClientsBulkRequest.getAttributeTypeMap = function () {
        return CreateClientsBulkRequest.attributeTypeMap;
    };
    CreateClientsBulkRequest.discriminator = undefined;
    CreateClientsBulkRequest.attributeTypeMap = [
        {
            "name": "clients",
            "baseName": "clients",
            "type": "Array<ClientInput>"
        }
    ];
    return CreateClientsBulkRequest;
}());
exports.CreateClientsBulkRequest = CreateClientsBulkRequest;
//# sourceMappingURL=createClientsBulkRequest.js.map