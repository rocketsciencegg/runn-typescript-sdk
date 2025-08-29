export declare class CreateInvitationRequestAllOfAnyOf {
    'editProjectsPermission': CreateInvitationRequestAllOfAnyOf.EditProjectsPermissionEnum;
    'editOthersPermission': CreateInvitationRequestAllOfAnyOf.EditOthersPermissionEnum;
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
export declare namespace CreateInvitationRequestAllOfAnyOf {
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
}
