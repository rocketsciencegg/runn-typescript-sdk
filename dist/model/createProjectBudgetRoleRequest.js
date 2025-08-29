"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectBudgetRoleRequest = void 0;
var CreateProjectBudgetRoleRequest = (function () {
    function CreateProjectBudgetRoleRequest() {
    }
    CreateProjectBudgetRoleRequest.getAttributeTypeMap = function () {
        return CreateProjectBudgetRoleRequest.attributeTypeMap;
    };
    CreateProjectBudgetRoleRequest.discriminator = undefined;
    CreateProjectBudgetRoleRequest.attributeTypeMap = [
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "estimatedMinutes",
            "baseName": "estimatedMinutes",
            "type": "number"
        },
        {
            "name": "estimatedBudget",
            "baseName": "estimatedBudget",
            "type": "number"
        }
    ];
    return CreateProjectBudgetRoleRequest;
}());
exports.CreateProjectBudgetRoleRequest = CreateProjectBudgetRoleRequest;
//# sourceMappingURL=createProjectBudgetRoleRequest.js.map