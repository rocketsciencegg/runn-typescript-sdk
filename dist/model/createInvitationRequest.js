"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateInvitationRequest = void 0;
var CreateInvitationRequest = (function () {
    function CreateInvitationRequest() {
    }
    CreateInvitationRequest.getAttributeTypeMap = function () {
        return CreateInvitationRequest.attributeTypeMap;
    };
    CreateInvitationRequest.discriminator = undefined;
    CreateInvitationRequest.attributeTypeMap = [
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "CreateInvitationRequest.UserTypeEnum"
        },
        {
            "name": "financialPermission",
            "baseName": "financialPermission",
            "type": "CreateInvitationRequest.FinancialPermissionEnum"
        },
        {
            "name": "fromUser",
            "baseName": "fromUser",
            "type": "string"
        },
        {
            "name": "editProjectsPermission",
            "baseName": "editProjectsPermission",
            "type": "CreateInvitationRequest.EditProjectsPermissionEnum"
        },
        {
            "name": "editOthersPermission",
            "baseName": "editOthersPermission",
            "type": "CreateInvitationRequest.EditOthersPermissionEnum"
        },
        {
            "name": "manageProjectsPermission",
            "baseName": "manageProjectsPermission",
            "type": "CreateInvitationRequest.ManageProjectsPermissionEnum"
        },
        {
            "name": "manageOthersPermission",
            "baseName": "manageOthersPermission",
            "type": "CreateInvitationRequest.ManageOthersPermissionEnum"
        }
    ];
    return CreateInvitationRequest;
}());
exports.CreateInvitationRequest = CreateInvitationRequest;
(function (CreateInvitationRequest) {
    var UserTypeEnum;
    (function (UserTypeEnum) {
        UserTypeEnum[UserTypeEnum["Admin"] = 'admin'] = "Admin";
        UserTypeEnum[UserTypeEnum["Editor"] = 'editor'] = "Editor";
        UserTypeEnum[UserTypeEnum["ViewerAll"] = 'viewer_all'] = "ViewerAll";
        UserTypeEnum[UserTypeEnum["ViewerBasic"] = 'viewer_basic'] = "ViewerBasic";
        UserTypeEnum[UserTypeEnum["TimesheetOnly"] = 'timesheet_only'] = "TimesheetOnly";
        UserTypeEnum[UserTypeEnum["Manager"] = 'manager'] = "Manager";
        UserTypeEnum[UserTypeEnum["Contributor"] = 'contributor'] = "Contributor";
    })(UserTypeEnum = CreateInvitationRequest.UserTypeEnum || (CreateInvitationRequest.UserTypeEnum = {}));
    var FinancialPermissionEnum;
    (function (FinancialPermissionEnum) {
        FinancialPermissionEnum[FinancialPermissionEnum["All"] = 'all'] = "All";
        FinancialPermissionEnum[FinancialPermissionEnum["NoSalaries"] = 'no_salaries'] = "NoSalaries";
        FinancialPermissionEnum[FinancialPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        FinancialPermissionEnum[FinancialPermissionEnum["None"] = 'none'] = "None";
    })(FinancialPermissionEnum = CreateInvitationRequest.FinancialPermissionEnum || (CreateInvitationRequest.FinancialPermissionEnum = {}));
    var EditProjectsPermissionEnum;
    (function (EditProjectsPermissionEnum) {
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["All"] = 'all'] = "All";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["Specific"] = 'specific'] = "Specific";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["None"] = 'none'] = "None";
    })(EditProjectsPermissionEnum = CreateInvitationRequest.EditProjectsPermissionEnum || (CreateInvitationRequest.EditProjectsPermissionEnum = {}));
    var EditOthersPermissionEnum;
    (function (EditOthersPermissionEnum) {
        EditOthersPermissionEnum[EditOthersPermissionEnum["All"] = 'all'] = "All";
        EditOthersPermissionEnum[EditOthersPermissionEnum["None"] = 'none'] = "None";
    })(EditOthersPermissionEnum = CreateInvitationRequest.EditOthersPermissionEnum || (CreateInvitationRequest.EditOthersPermissionEnum = {}));
    var ManageProjectsPermissionEnum;
    (function (ManageProjectsPermissionEnum) {
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["All"] = 'all'] = "All";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["Specific"] = 'specific'] = "Specific";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["None"] = 'none'] = "None";
    })(ManageProjectsPermissionEnum = CreateInvitationRequest.ManageProjectsPermissionEnum || (CreateInvitationRequest.ManageProjectsPermissionEnum = {}));
    var ManageOthersPermissionEnum;
    (function (ManageOthersPermissionEnum) {
        ManageOthersPermissionEnum[ManageOthersPermissionEnum["All"] = 'all'] = "All";
        ManageOthersPermissionEnum[ManageOthersPermissionEnum["None"] = 'none'] = "None";
    })(ManageOthersPermissionEnum = CreateInvitationRequest.ManageOthersPermissionEnum || (CreateInvitationRequest.ManageOthersPermissionEnum = {}));
})(CreateInvitationRequest || (exports.CreateInvitationRequest = CreateInvitationRequest = {}));
//# sourceMappingURL=createInvitationRequest.js.map