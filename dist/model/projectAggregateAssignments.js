"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAggregateAssignments = void 0;
var ProjectAggregateAssignments = (function () {
    function ProjectAggregateAssignments() {
    }
    ProjectAggregateAssignments.getAttributeTypeMap = function () {
        return ProjectAggregateAssignments.attributeTypeMap;
    };
    ProjectAggregateAssignments.discriminator = undefined;
    ProjectAggregateAssignments.attributeTypeMap = [
        {
            "name": "billableMinutes",
            "baseName": "billableMinutes",
            "type": "number"
        },
        {
            "name": "nonBillableMinutes",
            "baseName": "nonBillableMinutes",
            "type": "number"
        },
        {
            "name": "totalMinutes",
            "baseName": "totalMinutes",
            "type": "number"
        }
    ];
    return ProjectAggregateAssignments;
}());
exports.ProjectAggregateAssignments = ProjectAggregateAssignments;
//# sourceMappingURL=projectAggregateAssignments.js.map