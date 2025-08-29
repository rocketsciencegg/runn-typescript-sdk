"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportsHoursPeopleActuals = void 0;
var ReportsHoursPeopleActuals = (function () {
    function ReportsHoursPeopleActuals() {
    }
    ReportsHoursPeopleActuals.getAttributeTypeMap = function () {
        return ReportsHoursPeopleActuals.attributeTypeMap;
    };
    ReportsHoursPeopleActuals.discriminator = undefined;
    ReportsHoursPeopleActuals.attributeTypeMap = [
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
    return ReportsHoursPeopleActuals;
}());
exports.ReportsHoursPeopleActuals = ReportsHoursPeopleActuals;
//# sourceMappingURL=reportsHoursPeopleActuals.js.map