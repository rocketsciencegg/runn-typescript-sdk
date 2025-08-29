"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectNote = void 0;
var ProjectNote = (function () {
    function ProjectNote() {
    }
    ProjectNote.getAttributeTypeMap = function () {
        return ProjectNote.attributeTypeMap;
    };
    ProjectNote.discriminator = undefined;
    ProjectNote.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "createdBy",
            "baseName": "createdBy",
            "type": "string"
        },
        {
            "name": "createdByEmail",
            "baseName": "createdByEmail",
            "type": "string"
        },
        {
            "name": "note",
            "baseName": "note",
            "type": "string"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
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
    return ProjectNote;
}());
exports.ProjectNote = ProjectNote;
//# sourceMappingURL=projectNote.js.map