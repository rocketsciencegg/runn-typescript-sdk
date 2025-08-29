"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectBudgetRoleRequest = void 0;
var UpdateProjectBudgetRoleRequest = (function () {
    function UpdateProjectBudgetRoleRequest() {
    }
    UpdateProjectBudgetRoleRequest.getAttributeTypeMap = function () {
        return UpdateProjectBudgetRoleRequest.attributeTypeMap;
    };
    UpdateProjectBudgetRoleRequest.discriminator = undefined;
    UpdateProjectBudgetRoleRequest.attributeTypeMap = [
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
    return UpdateProjectBudgetRoleRequest;
}());
exports.UpdateProjectBudgetRoleRequest = UpdateProjectBudgetRoleRequest;
//# sourceMappingURL=updateProjectBudgetRoleRequest.js.map