"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectTag = void 0;
var ProjectTag = (function () {
    function ProjectTag() {
    }
    ProjectTag.getAttributeTypeMap = function () {
        return ProjectTag.attributeTypeMap;
    };
    ProjectTag.discriminator = undefined;
    ProjectTag.attributeTypeMap = [
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
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Array<number>"
        },
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
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
    return ProjectTag;
}());
exports.ProjectTag = ProjectTag;
//# sourceMappingURL=projectTag.js.map