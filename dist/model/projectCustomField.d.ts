import { PersonCustomFieldCustomFieldsInner } from './personCustomFieldCustomFieldsInner';
export declare class ProjectCustomField {
    'projectId': number;
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
