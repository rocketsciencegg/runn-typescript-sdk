export declare class UpdateProjectTimesheetLockRequest {
    'status': UpdateProjectTimesheetLockRequest.StatusEnum;
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
export declare namespace UpdateProjectTimesheetLockRequest {
    enum StatusEnum {
        Unlocked
    }
}
