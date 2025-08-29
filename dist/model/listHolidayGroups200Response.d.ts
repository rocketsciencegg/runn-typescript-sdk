import { HolidayGroup } from './holidayGroup';
export declare class ListHolidayGroups200Response {
    'values': Array<HolidayGroup>;
    'nextCursor': string;
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
