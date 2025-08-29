"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvitationRequestAllOfAnyOf1 = void 0;
var CreateInvitationRequestAllOfAnyOf1 = (function () {
    function CreateInvitationRequestAllOfAnyOf1() {
    }
    CreateInvitationRequestAllOfAnyOf1.getAttributeTypeMap = function () {
        return CreateInvitationRequestAllOfAnyOf1.attributeTypeMap;
    };
    CreateInvitationRequestAllOfAnyOf1.discriminator = undefined;
    CreateInvitationRequestAllOfAnyOf1.attributeTypeMap = [
        {
            "name": "manageProjectsPermission",
            "baseName": "manageProjectsPermission",
            "type": "CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum"
        },
        {
            "name": "manageOthersPermission",
            "baseName": "manageOthersPermission",
            "type": "CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum"
        }
    ];
    return CreateInvitationRequestAllOfAnyOf1;
}());
exports.CreateInvitationRequestAllOfAnyOf1 = CreateInvitationRequestAllOfAnyOf1;
(function (CreateInvitationRequestAllOfAnyOf1) {
    var ManageProjectsPermissionEnum;
    (function (ManageProjectsPermissionEnum) {
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["All"] = 'all'] = "All";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["Specific"] = 'specific'] = "Specific";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["None"] = 'none'] = "None";
    })(ManageProjectsPermissionEnum = CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum || (CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum = {}));
    var ManageOthersPermissionEnum;
    (function (ManageOthersPermissionEnum) {
        ManageOthersPermissionEnum[ManageOthersPermissionEnum["All"] = 'all'] = "All";
        ManageOthersPermissionEnum[ManageOthersPermissionEnum["None"] = 'none'] = "None";
    })(ManageOthersPermissionEnum = CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum || (CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum = {}));
})(CreateInvitationRequestAllOfAnyOf1 || (exports.CreateInvitationRequestAllOfAnyOf1 = CreateInvitationRequestAllOfAnyOf1 = {}));
//# sourceMappingURL=createInvitationRequestAllOfAnyOf1.js.map