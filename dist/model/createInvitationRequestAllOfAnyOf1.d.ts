export declare class CreateInvitationRequestAllOfAnyOf1 {
    'manageProjectsPermission': CreateInvitationRequestAllOfAnyOf1.ManageProjectsPermissionEnum;
    'manageOthersPermission': CreateInvitationRequestAllOfAnyOf1.ManageOthersPermissionEnum;
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
export declare namespace CreateInvitationRequestAllOfAnyOf1 {
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
