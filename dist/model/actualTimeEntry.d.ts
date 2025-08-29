export declare class ActualTimeEntry {
    'date': string;
    'billableMinutes': number;
    'billableNote'?: string;
    'nonbillableNote'?: string;
    'nonbillableMinutes': number;
    'phaseId'?: number;
    'personId': number;
    'projectId': number;
    'roleId': number;
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
