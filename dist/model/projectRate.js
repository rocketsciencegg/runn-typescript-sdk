"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectRate = void 0;
var ProjectRate = (function () {
    function ProjectRate() {
    }
    ProjectRate.getAttributeTypeMap = function () {
        return ProjectRate.attributeTypeMap;
    };
    ProjectRate.discriminator = undefined;
    ProjectRate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
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
            "name": "rate",
            "baseName": "rate",
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
    return ProjectRate;
}());
exports.ProjectRate = ProjectRate;
//# sourceMappingURL=projectRate.js.map