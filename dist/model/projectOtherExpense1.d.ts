export declare class ProjectOtherExpense1 {
    'cost'?: number;
    'charge'?: number;
    'name'?: string;
    'date'?: string;
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
