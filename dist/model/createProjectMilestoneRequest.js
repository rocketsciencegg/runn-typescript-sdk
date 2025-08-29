"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectMilestoneRequest = void 0;
var CreateProjectMilestoneRequest = (function () {
    function CreateProjectMilestoneRequest() {
    }
    CreateProjectMilestoneRequest.getAttributeTypeMap = function () {
        return CreateProjectMilestoneRequest.attributeTypeMap;
    };
    CreateProjectMilestoneRequest.discriminator = undefined;
    CreateProjectMilestoneRequest.attributeTypeMap = [
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
    return CreateProjectMilestoneRequest;
}());
exports.CreateProjectMilestoneRequest = CreateProjectMilestoneRequest;
//# sourceMappingURL=createProjectMilestoneRequest.js.map