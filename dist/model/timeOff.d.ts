export declare class TimeOff {
    'id': number;
    'personId': number;
    'startDate': string;
    'endDate': string;
    'note': string;
    'createdAt': Date;
    'updatedAt': Date;
    'minutesPerDay': number;
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
