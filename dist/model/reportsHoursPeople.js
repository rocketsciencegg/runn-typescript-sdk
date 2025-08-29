"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsHoursPeople = void 0;
var ReportsHoursPeople = (function () {
    function ReportsHoursPeople() {
    }
    ReportsHoursPeople.getAttributeTypeMap = function () {
        return ReportsHoursPeople.attributeTypeMap;
    };
    ReportsHoursPeople.discriminator = undefined;
    ReportsHoursPeople.attributeTypeMap = [
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
            "name": "projectId",
            "baseName": "projectId",
            "type": "number"
        },
        {
            "name": "personId",
            "baseName": "personId",
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
    return ReportsHoursPeople;
}());
exports.ReportsHoursPeople = ReportsHoursPeople;
//# sourceMappingURL=reportsHoursPeople.js.map