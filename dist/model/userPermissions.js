"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserPermissions = void 0;
var UserPermissions = (function () {
    function UserPermissions() {
    }
    UserPermissions.getAttributeTypeMap = function () {
        return UserPermissions.attributeTypeMap;
    };
    UserPermissions.discriminator = undefined;
    UserPermissions.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "UserPermissions.TypeEnum"
        },
        {
            "name": "financial",
            "baseName": "financial",
            "type": "UserPermissions.FinancialEnum"
        },
        {
            "name": "editProjects",
            "baseName": "editProjects",
            "type": "UserPermissions.EditProjectsEnum"
        },
        {
            "name": "manageProjects",
            "baseName": "manageProjects",
            "type": "UserPermissions.ManageProjectsEnum"
        },
        {
            "name": "editOthers",
            "baseName": "editOthers",
            "type": "UserPermissions.EditOthersEnum"
        },
        {
            "name": "managePeople",
            "baseName": "managePeople",
            "type": "UserPermissions.ManagePeopleEnum"
        },
        {
            "name": "manageAccount",
            "baseName": "manageAccount",
            "type": "boolean"
        },
        {
            "name": "addAllPeopleToProjects",
            "baseName": "addAllPeopleToProjects",
            "type": "boolean"
        },
        {
            "name": "viewPlanner",
            "baseName": "viewPlanner",
            "type": "boolean"
        }
    ];
    return UserPermissions;
}());
exports.UserPermissions = UserPermissions;
(function (UserPermissions) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Superuser"] = 'superuser'] = "Superuser";
        TypeEnum[TypeEnum["Admin"] = 'admin'] = "Admin";
        TypeEnum[TypeEnum["Editor"] = 'editor'] = "Editor";
        TypeEnum[TypeEnum["ViewerAll"] = 'viewer_all'] = "ViewerAll";
        TypeEnum[TypeEnum["ViewerBasic"] = 'viewer_basic'] = "ViewerBasic";
        TypeEnum[TypeEnum["TimesheetOnly"] = 'timesheet_only'] = "TimesheetOnly";
    })(TypeEnum = UserPermissions.TypeEnum || (UserPermissions.TypeEnum = {}));
    var FinancialEnum;
    (function (FinancialEnum) {
        FinancialEnum[FinancialEnum["All"] = 'all'] = "All";
        FinancialEnum[FinancialEnum["NoSalaries"] = 'no_salaries'] = "NoSalaries";
        FinancialEnum[FinancialEnum["Restricted"] = 'restricted'] = "Restricted";
        FinancialEnum[FinancialEnum["None"] = 'none'] = "None";
    })(FinancialEnum = UserPermissions.FinancialEnum || (UserPermissions.FinancialEnum = {}));
    var EditProjectsEnum;
    (function (EditProjectsEnum) {
        EditProjectsEnum[EditProjectsEnum["All"] = 'all'] = "All";
        EditProjectsEnum[EditProjectsEnum["Specific"] = 'specific'] = "Specific";
        EditProjectsEnum[EditProjectsEnum["Restricted"] = 'restricted'] = "Restricted";
        EditProjectsEnum[EditProjectsEnum["None"] = 'none'] = "None";
    })(EditProjectsEnum = UserPermissions.EditProjectsEnum || (UserPermissions.EditProjectsEnum = {}));
    var ManageProjectsEnum;
    (function (ManageProjectsEnum) {
        ManageProjectsEnum[ManageProjectsEnum["All"] = 'all'] = "All";
        ManageProjectsEnum[ManageProjectsEnum["Specific"] = 'specific'] = "Specific";
        ManageProjectsEnum[ManageProjectsEnum["Restricted"] = 'restricted'] = "Restricted";
        ManageProjectsEnum[ManageProjectsEnum["None"] = 'none'] = "None";
    })(ManageProjectsEnum = UserPermissions.ManageProjectsEnum || (UserPermissions.ManageProjectsEnum = {}));
    var EditOthersEnum;
    (function (EditOthersEnum) {
        EditOthersEnum[EditOthersEnum["All"] = 'all'] = "All";
        EditOthersEnum[EditOthersEnum["None"] = 'none'] = "None";
    })(EditOthersEnum = UserPermissions.EditOthersEnum || (UserPermissions.EditOthersEnum = {}));
    var ManagePeopleEnum;
    (function (ManagePeopleEnum) {
        ManagePeopleEnum[ManagePeopleEnum["All"] = 'all'] = "All";
        ManagePeopleEnum[ManagePeopleEnum["Restricted"] = 'restricted'] = "Restricted";
        ManagePeopleEnum[ManagePeopleEnum["None"] = 'none'] = "None";
    })(ManagePeopleEnum = UserPermissions.ManagePeopleEnum || (UserPermissions.ManagePeopleEnum = {}));
})(UserPermissions || (exports.UserPermissions = UserPermissions = {}));
//# sourceMappingURL=userPermissions.js.map