"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateWorkstreamRequest = void 0;
var UpdateWorkstreamRequest = (function () {
    function UpdateWorkstreamRequest() {
    }
    UpdateWorkstreamRequest.getAttributeTypeMap = function () {
        return UpdateWorkstreamRequest.attributeTypeMap;
    };
    UpdateWorkstreamRequest.discriminator = undefined;
    UpdateWorkstreamRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        }
    ];
    return UpdateWorkstreamRequest;
}());
exports.UpdateWorkstreamRequest = UpdateWorkstreamRequest;
//# sourceMappingURL=updateWorkstreamRequest.js.map