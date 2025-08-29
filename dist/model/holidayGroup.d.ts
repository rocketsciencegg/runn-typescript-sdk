export declare class HolidayGroup {
    'id': number;
    'name': string;
    'countryCode': string;
    'countryName': string;
    'regionName': string;
    'holidayIds': Array<number>;
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
