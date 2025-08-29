"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsHoursPeopleAssignments = void 0;
var ReportsHoursPeopleAssignments = (function () {
    function ReportsHoursPeopleAssignments() {
    }
    ReportsHoursPeopleAssignments.getAttributeTypeMap = function () {
        return ReportsHoursPeopleAssignments.attributeTypeMap;
    };
    ReportsHoursPeopleAssignments.discriminator = undefined;
    ReportsHoursPeopleAssignments.attributeTypeMap = [
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
            "name": "phaseId",
            "baseName": "phaseId",
            "type": "number"
        }
    ];
    return ReportsHoursPeopleAssignments;
}());
exports.ReportsHoursPeopleAssignments = ReportsHoursPeopleAssignments;
//# sourceMappingURL=reportsHoursPeopleAssignments.js.map