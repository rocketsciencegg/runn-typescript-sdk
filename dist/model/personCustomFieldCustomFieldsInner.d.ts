import { PersonCustomFieldsSelectInnerValuesInner } from './personCustomFieldsSelectInnerValuesInner';
export declare class PersonCustomFieldCustomFieldsInner {
    'name': string;
    'type': PersonCustomFieldCustomFieldsInner.TypeEnum;
    'customTextId': number;
    'value': Array<PersonCustomFieldsSelectInnerValuesInner>;
    'customDateId': number;
    'customCheckboxId': number;
    'customSelectId': number;
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
export declare namespace PersonCustomFieldCustomFieldsInner {
    enum TypeEnum {
        Text,
        Date,
        Checkbox,
        Select
    }
}
