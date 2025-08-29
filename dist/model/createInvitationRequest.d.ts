export declare class CreateInvitationRequest {
    'email': string;
    'userType': CreateInvitationRequest.UserTypeEnum;
    'financialPermission': CreateInvitationRequest.FinancialPermissionEnum;
    'fromUser': string;
    'editProjectsPermission': CreateInvitationRequest.EditProjectsPermissionEnum;
    'editOthersPermission': CreateInvitationRequest.EditOthersPermissionEnum;
    'manageProjectsPermission': CreateInvitationRequest.ManageProjectsPermissionEnum;
    'manageOthersPermission': CreateInvitationRequest.ManageOthersPermissionEnum;
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
export declare namespace CreateInvitationRequest {
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
    enum ManageOthersPermissionEnum {
        All,
        None
    }
}
