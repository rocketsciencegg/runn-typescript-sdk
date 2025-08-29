export declare class CreateAssignmentRequest {
    'phaseId'?: number;
    'personId': number;
    'projectId': number;
    'roleId': number;
    'startDate': string;
    'endDate': string;
    'minutesPerDay': number;
    'note'?: string;
    'isBillable'?: boolean;
    'isNonWorkingDay'?: boolean;
    'workstreamId'?: number;
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
