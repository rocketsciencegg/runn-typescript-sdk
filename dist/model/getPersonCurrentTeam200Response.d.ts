import { GetPersonCurrentTeam200ResponseValuesInner } from './getPersonCurrentTeam200ResponseValuesInner';
export declare class GetPersonCurrentTeam200Response {
    'values': Array<GetPersonCurrentTeam200ResponseValuesInner>;
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
