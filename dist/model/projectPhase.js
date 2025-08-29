"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectPhase = void 0;
var ProjectPhase = (function () {
    function ProjectPhase() {
    }
    ProjectPhase.getAttributeTypeMap = function () {
        return ProjectPhase.attributeTypeMap;
    };
    ProjectPhase.discriminator = undefined;
    ProjectPhase.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "string"
        },
        {
            "name": "startDate",
            "baseName": "startDate",
            "type": "string"
        },
        {
            "name": "endDate",
            "baseName": "endDate",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        }
    ];
    return ProjectPhase;
}());
exports.ProjectPhase = ProjectPhase;
//# sourceMappingURL=projectPhase.js.map