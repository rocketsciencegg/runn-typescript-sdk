"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateRoleRequest = void 0;
var CreateRoleRequest = (function () {
    function CreateRoleRequest() {
        this['defaultHourCost'] = 0;
        this['standardRate'] = 0;
    }
    CreateRoleRequest.getAttributeTypeMap = function () {
        return CreateRoleRequest.attributeTypeMap;
    };
    CreateRoleRequest.discriminator = undefined;
    CreateRoleRequest.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "defaultHourCost",
            "baseName": "defaultHourCost",
            "type": "number"
        },
        {
            "name": "standardRate",
            "baseName": "standardRate",
            "type": "number"
        },
        {
            "name": "references",
            "baseName": "references",
            "type": "Array<Reference>"
        }
    ];
    return CreateRoleRequest;
}());
exports.CreateRoleRequest = CreateRoleRequest;
//# sourceMappingURL=createRoleRequest.js.map