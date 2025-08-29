export declare class UserPermissions {
    'type': UserPermissions.TypeEnum;
    'financial': UserPermissions.FinancialEnum;
    'editProjects': UserPermissions.EditProjectsEnum;
    'manageProjects': UserPermissions.ManageProjectsEnum;
    'editOthers': UserPermissions.EditOthersEnum;
    'managePeople': UserPermissions.ManagePeopleEnum;
    'manageAccount': boolean;
    'addAllPeopleToProjects': boolean;
    'viewPlanner': boolean;
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
export declare namespace UserPermissions {
    enum TypeEnum {
        Superuser,
        Admin,
        Editor,
        ViewerAll,
        ViewerBasic,
        TimesheetOnly
    }
    enum FinancialEnum {
        All,
        NoSalaries,
        Restricted,
        None
    }
    enum EditProjectsEnum {
        All,
        Specific,
        Restricted,
        None
    }
    enum ManageProjectsEnum {
        All,
        Specific,
        Restricted,
        None
    }
    enum EditOthersEnum {
        All,
        None
    }
    enum ManagePeopleEnum {
        All,
        Restricted,
        None
    }
}
