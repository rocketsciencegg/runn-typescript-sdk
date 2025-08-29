import { PersonCustomFieldsCheckboxInner } from './personCustomFieldsCheckboxInner';
import { PersonCustomFieldsDateInner } from './personCustomFieldsDateInner';
import { PersonCustomFieldsSelectInner } from './personCustomFieldsSelectInner';
import { PersonCustomFieldsTextInner } from './personCustomFieldsTextInner';
export declare class PersonCustomFields {
    'select': Array<PersonCustomFieldsSelectInner>;
    'text': Array<PersonCustomFieldsTextInner>;
    'checkbox': Array<PersonCustomFieldsCheckboxInner>;
    'date': Array<PersonCustomFieldsDateInner>;
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
