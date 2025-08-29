"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateProjectPersonRequest200Response = void 0;
var UpdateProjectPersonRequest200Response = (function () {
    function UpdateProjectPersonRequest200Response() {
    }
    UpdateProjectPersonRequest200Response.getAttributeTypeMap = function () {
        return UpdateProjectPersonRequest200Response.attributeTypeMap;
    };
    UpdateProjectPersonRequest200Response.discriminator = undefined;
    UpdateProjectPersonRequest200Response.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "UpdateProjectPersonRequest200Response.StatusEnum"
        }
    ];
    return UpdateProjectPersonRequest200Response;
}());
exports.UpdateProjectPersonRequest200Response = UpdateProjectPersonRequest200Response;
(function (UpdateProjectPersonRequest200Response) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["NeedToHire"] = 'NEED_TO_HIRE'] = "NeedToHire";
        StatusEnum[StatusEnum["Requested"] = 'REQUESTED'] = "Requested";
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
    })(StatusEnum = UpdateProjectPersonRequest200Response.StatusEnum || (UpdateProjectPersonRequest200Response.StatusEnum = {}));
})(UpdateProjectPersonRequest200Response || (exports.UpdateProjectPersonRequest200Response = UpdateProjectPersonRequest200Response = {}));
//# sourceMappingURL=updateProjectPersonRequest200Response.js.map