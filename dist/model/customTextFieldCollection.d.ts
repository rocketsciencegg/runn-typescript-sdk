export declare class CustomTextFieldCollection {
    'name': string;
    'type': CustomTextFieldCollection.TypeEnum;
    'customTextId': number;
    'value': string;
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
export declare namespace CustomTextFieldCollection {
    enum TypeEnum {
        Text
    }
}
