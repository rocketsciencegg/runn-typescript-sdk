"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectTimesheetLockRequestAnyOf1 = void 0;
var UpdateProjectTimesheetLockRequestAnyOf1 = (function () {
    function UpdateProjectTimesheetLockRequestAnyOf1() {
    }
    UpdateProjectTimesheetLockRequestAnyOf1.getAttributeTypeMap = function () {
        return UpdateProjectTimesheetLockRequestAnyOf1.attributeTypeMap;
    };
    UpdateProjectTimesheetLockRequestAnyOf1.discriminator = undefined;
    UpdateProjectTimesheetLockRequestAnyOf1.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum"
        }
    ];
    return UpdateProjectTimesheetLockRequestAnyOf1;
}());
exports.UpdateProjectTimesheetLockRequestAnyOf1 = UpdateProjectTimesheetLockRequestAnyOf1;
(function (UpdateProjectTimesheetLockRequestAnyOf1) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Unlocked"] = 'UNLOCKED'] = "Unlocked";
    })(StatusEnum = UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum || (UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum = {}));
})(UpdateProjectTimesheetLockRequestAnyOf1 || (exports.UpdateProjectTimesheetLockRequestAnyOf1 = UpdateProjectTimesheetLockRequestAnyOf1 = {}));
//# sourceMappingURL=updateProjectTimesheetLockRequestAnyOf1.js.map