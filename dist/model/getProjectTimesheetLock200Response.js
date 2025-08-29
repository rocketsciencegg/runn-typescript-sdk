"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProjectTimesheetLock200Response = void 0;
var GetProjectTimesheetLock200Response = (function () {
    function GetProjectTimesheetLock200Response() {
    }
    GetProjectTimesheetLock200Response.getAttributeTypeMap = function () {
        return GetProjectTimesheetLock200Response.attributeTypeMap;
    };
    GetProjectTimesheetLock200Response.discriminator = undefined;
    GetProjectTimesheetLock200Response.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "GetProjectTimesheetLock200Response.StatusEnum"
        },
        {
            "name": "lockedUntil",
            "baseName": "lockedUntil",
            "type": "Date"
        },
        {
            "name": "lastUpdatedBy",
            "baseName": "lastUpdatedBy",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "updatedAt",
            "type": "Date"
        }
    ];
    return GetProjectTimesheetLock200Response;
}());
exports.GetProjectTimesheetLock200Response = GetProjectTimesheetLock200Response;
(function (GetProjectTimesheetLock200Response) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Locked"] = 'LOCKED'] = "Locked";
        StatusEnum[StatusEnum["Unlocked"] = 'UNLOCKED'] = "Unlocked";
    })(StatusEnum = GetProjectTimesheetLock200Response.StatusEnum || (GetProjectTimesheetLock200Response.StatusEnum = {}));
})(GetProjectTimesheetLock200Response || (exports.GetProjectTimesheetLock200Response = GetProjectTimesheetLock200Response = {}));
//# sourceMappingURL=getProjectTimesheetLock200Response.js.map