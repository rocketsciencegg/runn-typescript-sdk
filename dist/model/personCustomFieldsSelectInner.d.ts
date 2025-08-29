import { PersonCustomFieldsSelectInnerValuesInner } from './personCustomFieldsSelectInnerValuesInner';
export declare class PersonCustomFieldsSelectInner {
    'id': number;
    'name': string;
    'values': Array<PersonCustomFieldsSelectInnerValuesInner>;
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
