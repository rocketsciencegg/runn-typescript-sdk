import { PersonCustomFieldCustomFieldsInner } from './personCustomFieldCustomFieldsInner';
export declare class PersonCustomField {
    'personId': number;
    'customFields': Array<PersonCustomFieldCustomFieldsInner>;
    'createdAt': Date;
    'updatedAt': Date;
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
