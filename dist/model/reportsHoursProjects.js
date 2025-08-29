"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsHoursProjects = void 0;
var ReportsHoursProjects = (function () {
    function ReportsHoursProjects() {
    }
    ReportsHoursProjects.getAttributeTypeMap = function () {
        return ReportsHoursProjects.attributeTypeMap;
    };
    ReportsHoursProjects.discriminator = undefined;
    ReportsHoursProjects.attributeTypeMap = [
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        },
        {
            "name": "roleId",
            "baseName": "roleId",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "workstreamId",
            "baseName": "workstreamId",
            "type": "number"
        },
        {
            "name": "phaseId",
            "baseName": "phaseId",
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
            "type": "ReportsHoursPeopleAssignments"
        },
        {
            "name": "actuals",
            "baseName": "actuals",
            "type": "ReportsHoursPeopleActuals"
        }
    ];
    return ReportsHoursProjects;
}());
exports.ReportsHoursProjects = ReportsHoursProjects;
//# sourceMappingURL=reportsHoursProjects.js.map