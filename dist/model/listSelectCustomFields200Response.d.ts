import { CustomFieldSelect } from './customFieldSelect';
export declare class ListSelectCustomFields200Response {
    'values': Array<CustomFieldSelect>;
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
