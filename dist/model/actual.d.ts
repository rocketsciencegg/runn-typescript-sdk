export declare class Actual {
    'id': number;
    'date': string;
    'billableMinutes': number;
    'nonbillableMinutes': number;
    'billableNote': string;
    'nonbillableNote': string;
    'phaseId': number;
    'personId': number;
    'projectId': number;
    'roleId': number;
    'workstreamId': number;
    'createdAt': Date;
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
