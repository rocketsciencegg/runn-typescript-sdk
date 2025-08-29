"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Invitation = void 0;
var Invitation = (function () {
    function Invitation() {
    }
    Invitation.getAttributeTypeMap = function () {
        return Invitation.attributeTypeMap;
    };
    Invitation.discriminator = undefined;
    Invitation.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "number"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "userType",
            "baseName": "userType",
            "type": "Invitation.UserTypeEnum"
        },
        {
            "name": "financialPermission",
            "baseName": "financialPermission",
            "type": "Invitation.FinancialPermissionEnum"
        },
        {
            "name": "editProjectsPermission",
            "baseName": "editProjectsPermission",
            "type": "Invitation.EditProjectsPermissionEnum"
        },
        {
            "name": "editOthersPermission",
            "baseName": "editOthersPermission",
            "type": "Invitation.EditOthersPermissionEnum"
        },
        {
            "name": "manageProjectsPermission",
            "baseName": "manageProjectsPermission",
            "type": "Invitation.ManageProjectsPermissionEnum"
        },
        {
            "name": "managePeoplePermission",
            "baseName": "managePeoplePermission",
            "type": "Invitation.ManagePeoplePermissionEnum"
        },
        {
            "name": "manageAccountPermission",
            "baseName": "manageAccountPermission",
            "type": "boolean"
        },
        {
            "name": "addAllPeopleToProjectsPermission",
            "baseName": "addAllPeopleToProjectsPermission",
            "type": "boolean"
        },
        {
            "name": "viewPlannerPermission",
            "baseName": "viewPlannerPermission",
            "type": "boolean"
        },
        {
            "name": "createdAt",
            "baseName": "createdAt",
            "type": "Date"
        },
        {
            "name": "sentAt",
            "baseName": "sentAt",
            "type": "Date"
        },
        {
            "name": "expiresAt",
            "baseName": "expiresAt",
            "type": "Date"
        }
    ];
    return Invitation;
}());
exports.Invitation = Invitation;
(function (Invitation) {
    var UserTypeEnum;
    (function (UserTypeEnum) {
        UserTypeEnum[UserTypeEnum["Admin"] = 'admin'] = "Admin";
        UserTypeEnum[UserTypeEnum["Editor"] = 'editor'] = "Editor";
        UserTypeEnum[UserTypeEnum["ViewerAll"] = 'viewer_all'] = "ViewerAll";
        UserTypeEnum[UserTypeEnum["ViewerBasic"] = 'viewer_basic'] = "ViewerBasic";
        UserTypeEnum[UserTypeEnum["TimesheetOnly"] = 'timesheet_only'] = "TimesheetOnly";
        UserTypeEnum[UserTypeEnum["Manager"] = 'manager'] = "Manager";
        UserTypeEnum[UserTypeEnum["Contributor"] = 'contributor'] = "Contributor";
    })(UserTypeEnum = Invitation.UserTypeEnum || (Invitation.UserTypeEnum = {}));
    var FinancialPermissionEnum;
    (function (FinancialPermissionEnum) {
        FinancialPermissionEnum[FinancialPermissionEnum["All"] = 'all'] = "All";
        FinancialPermissionEnum[FinancialPermissionEnum["NoSalaries"] = 'no_salaries'] = "NoSalaries";
        FinancialPermissionEnum[FinancialPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        FinancialPermissionEnum[FinancialPermissionEnum["None"] = 'none'] = "None";
    })(FinancialPermissionEnum = Invitation.FinancialPermissionEnum || (Invitation.FinancialPermissionEnum = {}));
    var EditProjectsPermissionEnum;
    (function (EditProjectsPermissionEnum) {
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["All"] = 'all'] = "All";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["Specific"] = 'specific'] = "Specific";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        EditProjectsPermissionEnum[EditProjectsPermissionEnum["None"] = 'none'] = "None";
    })(EditProjectsPermissionEnum = Invitation.EditProjectsPermissionEnum || (Invitation.EditProjectsPermissionEnum = {}));
    var EditOthersPermissionEnum;
    (function (EditOthersPermissionEnum) {
        EditOthersPermissionEnum[EditOthersPermissionEnum["All"] = 'all'] = "All";
        EditOthersPermissionEnum[EditOthersPermissionEnum["None"] = 'none'] = "None";
    })(EditOthersPermissionEnum = Invitation.EditOthersPermissionEnum || (Invitation.EditOthersPermissionEnum = {}));
    var ManageProjectsPermissionEnum;
    (function (ManageProjectsPermissionEnum) {
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["All"] = 'all'] = "All";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["Specific"] = 'specific'] = "Specific";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        ManageProjectsPermissionEnum[ManageProjectsPermissionEnum["None"] = 'none'] = "None";
    })(ManageProjectsPermissionEnum = Invitation.ManageProjectsPermissionEnum || (Invitation.ManageProjectsPermissionEnum = {}));
    var ManagePeoplePermissionEnum;
    (function (ManagePeoplePermissionEnum) {
        ManagePeoplePermissionEnum[ManagePeoplePermissionEnum["All"] = 'all'] = "All";
        ManagePeoplePermissionEnum[ManagePeoplePermissionEnum["Restricted"] = 'restricted'] = "Restricted";
        ManagePeoplePermissionEnum[ManagePeoplePermissionEnum["None"] = 'none'] = "None";
    })(ManagePeoplePermissionEnum = Invitation.ManagePeoplePermissionEnum || (Invitation.ManagePeoplePermissionEnum = {}));
})(Invitation || (exports.Invitation = Invitation = {}));
//# sourceMappingURL=invitation.js.map