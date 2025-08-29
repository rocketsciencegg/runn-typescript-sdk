export declare class CustomCheckboxFieldCollection {
    'name': string;
    'type': CustomCheckboxFieldCollection.TypeEnum;
    'customCheckboxId': number;
    'value': boolean;
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
export declare namespace CustomCheckboxFieldCollection {
    enum TypeEnum {
        Checkbox
    }
}
