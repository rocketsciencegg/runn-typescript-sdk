import { ListPersonHolidays200ResponseValuesInner } from './listPersonHolidays200ResponseValuesInner';
export declare class ListPersonHolidays200Response {
    'values': Array<ListPersonHolidays200ResponseValuesInner>;
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
