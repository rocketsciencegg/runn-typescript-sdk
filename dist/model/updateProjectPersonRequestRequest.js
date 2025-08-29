"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectPersonRequestRequest = void 0;
var UpdateProjectPersonRequestRequest = (function () {
    function UpdateProjectPersonRequestRequest() {
    }
    UpdateProjectPersonRequestRequest.getAttributeTypeMap = function () {
        return UpdateProjectPersonRequestRequest.attributeTypeMap;
    };
    UpdateProjectPersonRequestRequest.discriminator = undefined;
    UpdateProjectPersonRequestRequest.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateProjectPersonRequestRequest.StatusEnum"
        }
    ];
    return UpdateProjectPersonRequestRequest;
}());
exports.UpdateProjectPersonRequestRequest = UpdateProjectPersonRequestRequest;
(function (UpdateProjectPersonRequestRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["NeedToHire"] = 'NEED_TO_HIRE'] = "NeedToHire";
        StatusEnum[StatusEnum["Requested"] = 'REQUESTED'] = "Requested";
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
    })(StatusEnum = UpdateProjectPersonRequestRequest.StatusEnum || (UpdateProjectPersonRequestRequest.StatusEnum = {}));
})(UpdateProjectPersonRequestRequest || (exports.UpdateProjectPersonRequestRequest = UpdateProjectPersonRequestRequest = {}));
//# sourceMappingURL=updateProjectPersonRequestRequest.js.map