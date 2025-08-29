"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectMilestoneRequest = void 0;
var UpdateProjectMilestoneRequest = (function () {
    function UpdateProjectMilestoneRequest() {
    }
    UpdateProjectMilestoneRequest.getAttributeTypeMap = function () {
        return UpdateProjectMilestoneRequest.attributeTypeMap;
    };
    UpdateProjectMilestoneRequest.discriminator = undefined;
    UpdateProjectMilestoneRequest.attributeTypeMap = [
        {
            "name": "title",
            "baseName": "title",
            "type": "string"
        },
        {
            "name": "icon",
            "baseName": "icon",
            "type": "CreateProjectMilestoneRequestIcon"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        }
    ];
    return UpdateProjectMilestoneRequest;
}());
exports.UpdateProjectMilestoneRequest = UpdateProjectMilestoneRequest;
//# sourceMappingURL=updateProjectMilestoneRequest.js.map