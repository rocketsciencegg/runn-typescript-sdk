export declare class CustomDateFieldCollection {
    'name': string;
    'type': CustomDateFieldCollection.TypeEnum;
    'customDateId': number;
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
export declare namespace CustomDateFieldCollection {
    enum TypeEnum {
        Date
    }
}
