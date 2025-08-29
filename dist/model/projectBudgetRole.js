"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectBudgetRole = void 0;
var ProjectBudgetRole = (function () {
    function ProjectBudgetRole() {
    }
    ProjectBudgetRole.getAttributeTypeMap = function () {
        return ProjectBudgetRole.attributeTypeMap;
    };
    ProjectBudgetRole.discriminator = undefined;
    ProjectBudgetRole.attributeTypeMap = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
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
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return ProjectBudgetRole;
}());
exports.ProjectBudgetRole = ProjectBudgetRole;
//# sourceMappingURL=projectBudgetRole.js.map