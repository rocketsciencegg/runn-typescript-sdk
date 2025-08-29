"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvitationRequestAllOfAnyOf = void 0;
var CreateInvitationRequestAllOfAnyOf = (function () {
    function CreateInvitationRequestAllOfAnyOf() {
    }
    CreateInvitationRequestAllOfAnyOf.getAttributeTypeMap = function () {
        return CreateInvitationRequestAllOfAnyOf.attributeTypeMap;
    };
    CreateInvitationRequestAllOfAnyOf.discriminator = undefined;
    CreateInvitationRequestAllOfAnyOf.attributeTypeMap = [
        {
            "name": "editProjectsPermission",
            "baseName": "editProjectsPermission",
            "type": "CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum"
        },
        {
            "name": "editOthersPermission",
            "baseName": "editOthersPermission",
            "type": "CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum"
        }
    ];
    return CreateInvitationRequestAllOfAnyOf;
}());
exports.CreateInvitationRequestAllOfAnyOf = CreateInvitationRequestAllOfAnyOf;
(function (CreateInvitationRequestAllOfAnyOf) {
    var EditProjectsPermissionEnum;
    (function (EditProjectsPermissionEnum) {
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["All"] = 'all'] = "All";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["Specific"] = 'specific'] = "Specific";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["None"] = 'none'] = "None";
    })(EditProjectsPermissionEnum = CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum || (CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum = {}));
    var EditOthersPermissionEnum;
    (function (EditOthersPermissionEnum) {
        EditOthersPermissionEnum[EditOthersPermissionEnum["All"] = 'all'] = "All";
        EditOthersPermissionEnum[EditOthersPermissionEnum["None"] = 'none'] = "None";
    })(EditOthersPermissionEnum = CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum || (CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum = {}));
})(CreateInvitationRequestAllOfAnyOf || (exports.CreateInvitationRequestAllOfAnyOf = CreateInvitationRequestAllOfAnyOf = {}));
//# sourceMappingURL=createInvitationRequestAllOfAnyOf.js.map