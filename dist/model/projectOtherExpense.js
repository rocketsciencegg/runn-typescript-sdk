"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProjectOtherExpense = void 0;
var ProjectOtherExpense = (function () {
    function ProjectOtherExpense() {
    }
    ProjectOtherExpense.getAttributeTypeMap = function () {
        return ProjectOtherExpense.attributeTypeMap;
    };
    ProjectOtherExpense.discriminator = undefined;
    ProjectOtherExpense.attributeTypeMap = [
        {
            "name": "cost",
            "baseName": "cost",
            "type": "number"
        },
        {
            "name": "charge",
            "baseName": "charge",
            "type": "number"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "date",
            "baseName": "date",
            "type": "string"
        }
    ];
    return ProjectOtherExpense;
}());
exports.ProjectOtherExpense = ProjectOtherExpense;
//# sourceMappingURL=projectOtherExpense.js.map