import { ListProjectMembers200ResponseValuesInner } from './listProjectMembers200ResponseValuesInner';
export declare class ListProjectMembers200Response {
    'values': Array<ListProjectMembers200ResponseValuesInner>;
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
