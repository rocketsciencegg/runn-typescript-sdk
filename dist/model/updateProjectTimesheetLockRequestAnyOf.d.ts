export declare class UpdateProjectTimesheetLockRequestAnyOf {
    'status': UpdateProjectTimesheetLockRequestAnyOf.StatusEnum;
    'lockedUntil': string;
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
export declare namespace UpdateProjectTimesheetLockRequestAnyOf {
    enum StatusEnum {
        Locked
    }
}
