export declare class UpdateProjectTimesheetLockRequestAnyOf1 {
    'status': UpdateProjectTimesheetLockRequestAnyOf1.StatusEnum;
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
export declare namespace UpdateProjectTimesheetLockRequestAnyOf1 {
    enum StatusEnum {
        Unlocked
    }
}
