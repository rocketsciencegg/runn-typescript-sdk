"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateRoleRequest = void 0;
var UpdateRoleRequest = (function () {
    function UpdateRoleRequest() {
    }
    UpdateRoleRequest.getAttributeTypeMap = function () {
        return UpdateRoleRequest.attributeTypeMap;
    };
    UpdateRoleRequest.discriminator = undefined;
    UpdateRoleRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
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
        },
        {
            "name": "standardRate",
            "baseName": "standardRate",
            "type": "number"
        },
        {
            "name": "defaultHourCost",
            "baseName": "defaultHourCost",
            "type": "number"
        }
    ];
    return UpdateRoleRequest;
}());
exports.UpdateRoleRequest = UpdateRoleRequest;
//# sourceMappingURL=updateRoleRequest.js.map