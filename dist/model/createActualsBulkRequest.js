"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateActualsBulkRequest = void 0;
var CreateActualsBulkRequest = (function () {
    function CreateActualsBulkRequest() {
    }
    CreateActualsBulkRequest.getAttributeTypeMap = function () {
        return CreateActualsBulkRequest.attributeTypeMap;
    };
    CreateActualsBulkRequest.discriminator = undefined;
    CreateActualsBulkRequest.attributeTypeMap = [
        {
            "name": "actuals",
            "baseName": "actuals",
            "type": "Array<ActualInput>"
        }
    ];
    return CreateActualsBulkRequest;
}());
exports.CreateActualsBulkRequest = CreateActualsBulkRequest;
//# sourceMappingURL=createActualsBulkRequest.js.map