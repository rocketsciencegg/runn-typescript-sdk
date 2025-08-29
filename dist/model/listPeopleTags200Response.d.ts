import { ListPeopleTags200ResponseValuesInner } from './listPeopleTags200ResponseValuesInner';
export declare class ListPeopleTags200Response {
    'values': Array<ListPeopleTags200ResponseValuesInner>;
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
