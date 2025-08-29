"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAggregate = void 0;
var ProjectAggregate = (function () {
    function ProjectAggregate() {
    }
    ProjectAggregate.getAttributeTypeMap = function () {
        return ProjectAggregate.attributeTypeMap;
    };
    ProjectAggregate.discriminator = undefined;
    ProjectAggregate.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
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
        },
        {
            "name": "assignments",
            "baseName": "assignments",
            "type": "ProjectAggregateAssignments"
        },
        {
            "name": "actuals",
            "baseName": "actuals",
            "type": "ProjectAggregateActuals"
        }
    ];
    return ProjectAggregate;
}());
exports.ProjectAggregate = ProjectAggregate;
//# sourceMappingURL=projectAggregate.js.map