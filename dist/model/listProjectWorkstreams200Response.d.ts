import { ListProjectWorkstreams200ResponseValuesInner } from './listProjectWorkstreams200ResponseValuesInner';
export declare class ListProjectWorkstreams200Response {
    'values': Array<ListProjectWorkstreams200ResponseValuesInner>;
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
