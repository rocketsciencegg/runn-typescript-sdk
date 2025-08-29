"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectCustomField = void 0;
var ProjectCustomField = (function () {
    function ProjectCustomField() {
    }
    ProjectCustomField.getAttributeTypeMap = function () {
        return ProjectCustomField.attributeTypeMap;
    };
    ProjectCustomField.discriminator = undefined;
    ProjectCustomField.attributeTypeMap = [
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "Array<PersonCustomFieldCustomFieldsInner>"
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
    return ProjectCustomField;
}());
exports.ProjectCustomField = ProjectCustomField;
//# sourceMappingURL=projectCustomField.js.map