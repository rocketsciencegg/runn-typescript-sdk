export declare class ReportsHoursPeopleActuals {
    'billableMinutes': number;
    'nonBillableMinutes': number;
    'totalMinutes': number;
    'phaseId': number;
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
