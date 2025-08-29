"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectTimesheetLockRequest = void 0;
var UpdateProjectTimesheetLockRequest = (function () {
    function UpdateProjectTimesheetLockRequest() {
    }
    UpdateProjectTimesheetLockRequest.getAttributeTypeMap = function () {
        return UpdateProjectTimesheetLockRequest.attributeTypeMap;
    };
    UpdateProjectTimesheetLockRequest.discriminator = undefined;
    UpdateProjectTimesheetLockRequest.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateProjectTimesheetLockRequest.StatusEnum"
        },
        {
            "name": "lockedUntil",
            "baseName": "lockedUntil",
            "type": "string"
        }
    ];
    return UpdateProjectTimesheetLockRequest;
}());
exports.UpdateProjectTimesheetLockRequest = UpdateProjectTimesheetLockRequest;
(function (UpdateProjectTimesheetLockRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Unlocked"] = 'UNLOCKED'] = "Unlocked";
    })(StatusEnum = UpdateProjectTimesheetLockRequest.StatusEnum || (UpdateProjectTimesheetLockRequest.StatusEnum = {}));
})(UpdateProjectTimesheetLockRequest || (exports.UpdateProjectTimesheetLockRequest = UpdateProjectTimesheetLockRequest = {}));
//# sourceMappingURL=updateProjectTimesheetLockRequest.js.map