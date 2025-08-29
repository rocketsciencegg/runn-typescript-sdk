"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectTimesheetLockRequestAnyOf = void 0;
var UpdateProjectTimesheetLockRequestAnyOf = (function () {
    function UpdateProjectTimesheetLockRequestAnyOf() {
    }
    UpdateProjectTimesheetLockRequestAnyOf.getAttributeTypeMap = function () {
        return UpdateProjectTimesheetLockRequestAnyOf.attributeTypeMap;
    };
    UpdateProjectTimesheetLockRequestAnyOf.discriminator = undefined;
    UpdateProjectTimesheetLockRequestAnyOf.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateProjectTimesheetLockRequestAnyOf.StatusEnum"
        },
        {
            "name": "lockedUntil",
            "baseName": "lockedUntil",
            "type": "string"
        }
    ];
    return UpdateProjectTimesheetLockRequestAnyOf;
}());
exports.UpdateProjectTimesheetLockRequestAnyOf = UpdateProjectTimesheetLockRequestAnyOf;
(function (UpdateProjectTimesheetLockRequestAnyOf) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Locked"] = 'LOCKED'] = "Locked";
    })(StatusEnum = UpdateProjectTimesheetLockRequestAnyOf.StatusEnum || (UpdateProjectTimesheetLockRequestAnyOf.StatusEnum = {}));
})(UpdateProjectTimesheetLockRequestAnyOf || (exports.UpdateProjectTimesheetLockRequestAnyOf = UpdateProjectTimesheetLockRequestAnyOf = {}));
//# sourceMappingURL=updateProjectTimesheetLockRequestAnyOf.js.map