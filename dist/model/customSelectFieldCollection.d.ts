import { PersonCustomFieldsSelectInnerValuesInner } from './personCustomFieldsSelectInnerValuesInner';
export declare class CustomSelectFieldCollection {
    'name': string;
    'type': CustomSelectFieldCollection.TypeEnum;
    'customSelectId': number;
    'value': Array<PersonCustomFieldsSelectInnerValuesInner>;
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
export declare namespace CustomSelectFieldCollection {
    enum TypeEnum {
        Select
    }
}
