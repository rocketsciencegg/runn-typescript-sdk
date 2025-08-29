"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectAggregateActuals = void 0;
var ProjectAggregateActuals = (function () {
    function ProjectAggregateActuals() {
    }
    ProjectAggregateActuals.getAttributeTypeMap = function () {
        return ProjectAggregateActuals.attributeTypeMap;
    };
    ProjectAggregateActuals.discriminator = undefined;
    ProjectAggregateActuals.attributeTypeMap = [
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
    return ProjectAggregateActuals;
}());
exports.ProjectAggregateActuals = ProjectAggregateActuals;
//# sourceMappingURL=projectAggregateActuals.js.map