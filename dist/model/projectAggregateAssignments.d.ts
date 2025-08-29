export declare class ProjectAggregateAssignments {
    'billableMinutes': number;
    'nonBillableMinutes': number;
    'totalMinutes': number;
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
