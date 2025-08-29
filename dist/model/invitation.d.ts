export declare class Invitation {
    'id': number;
    'email': string;
    'userType': Invitation.UserTypeEnum;
    'financialPermission': Invitation.FinancialPermissionEnum;
    'editProjectsPermission': Invitation.EditProjectsPermissionEnum;
    'editOthersPermission': Invitation.EditOthersPermissionEnum;
    'manageProjectsPermission': Invitation.ManageProjectsPermissionEnum;
    'managePeoplePermission': Invitation.ManagePeoplePermissionEnum;
    'manageAccountPermission': boolean;
    'addAllPeopleToProjectsPermission': boolean;
    'viewPlannerPermission': boolean;
    'createdAt': Date;
    'sentAt': Date;
    'expiresAt': Date;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
export declare namespace Invitation {
    enum UserTypeEnum {
        Admin,
        Editor,
        ViewerAll,
        ViewerBasic,
        TimesheetOnly,
        Manager,
        Contributor
    }
    enum FinancialPermissionEnum {
        All,
        NoSalaries,
        Restricted,
        None
    }
    enum EditProjectsPermissionEnum {
        All,
        Specific,
        Restricted,
        None
    }
    enum EditOthersPermissionEnum {
        All,
        None
    }
    enum ManageProjectsPermissionEnum {
        All,
        Specific,
        Restricted,
        None
    }
    enum ManagePeoplePermissionEnum {
        All,
        Restricted,
        None
    }
}
