"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectWorkstream = void 0;
var ProjectWorkstream = (function () {
    function ProjectWorkstream() {
    }
    ProjectWorkstream.getAttributeTypeMap = function () {
        return ProjectWorkstream.attributeTypeMap;
    };
    ProjectWorkstream.discriminator = undefined;
    ProjectWorkstream.attributeTypeMap = [
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
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "projectIds",
            "baseName": "projectIds",
            "type": "Array<number>"
        }
    ];
    return ProjectWorkstream;
}());
exports.ProjectWorkstream = ProjectWorkstream;
//# sourceMappingURL=projectWorkstream.js.map