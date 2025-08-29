export declare class GetProjectTimesheetLock200Response {
    'status': GetProjectTimesheetLock200Response.StatusEnum;
    'lockedUntil': Date;
    'lastUpdatedBy': string;
    'updatedAt': Date;
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
export declare namespace GetProjectTimesheetLock200Response {
    enum StatusEnum {
        Locked,
        Unlocked
    }
}
