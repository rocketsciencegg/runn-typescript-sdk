"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProjectPersonRequestRequest = void 0;
var CreateProjectPersonRequestRequest = (function () {
    function CreateProjectPersonRequestRequest() {
    }
    CreateProjectPersonRequestRequest.getAttributeTypeMap = function () {
        return CreateProjectPersonRequestRequest.attributeTypeMap;
    };
    CreateProjectPersonRequestRequest.discriminator = undefined;
    CreateProjectPersonRequestRequest.attributeTypeMap = [
        {
            "name": "personId",
            "baseName": "personId",
            "type": "number"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "CreateProjectPersonRequestRequest.StatusEnum"
        }
    ];
    return CreateProjectPersonRequestRequest;
}());
exports.CreateProjectPersonRequestRequest = CreateProjectPersonRequestRequest;
(function (CreateProjectPersonRequestRequest) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["NeedToHire"] = 'NEED_TO_HIRE'] = "NeedToHire";
        StatusEnum[StatusEnum["Requested"] = 'REQUESTED'] = "Requested";
        StatusEnum[StatusEnum["Pending"] = 'PENDING'] = "Pending";
    })(StatusEnum = CreateProjectPersonRequestRequest.StatusEnum || (CreateProjectPersonRequestRequest.StatusEnum = {}));
})(CreateProjectPersonRequestRequest || (exports.CreateProjectPersonRequestRequest = CreateProjectPersonRequestRequest = {}));
//# sourceMappingURL=createProjectPersonRequestRequest.js.map