export declare class UpdateContractRequestRosteredDays {
    'monday': number;
    'tuesday': number;
    'wednesday': number;
    'thursday': number;
    'friday': number;
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
