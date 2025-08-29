export declare class CustomFieldText {
    'id': number;
    'name': string;
    'description': string;
    'model': CustomFieldText.ModelEnum;
    'required': boolean;
    'showInPlanner': boolean;
    'sortOrder': number;
    'filterableInPlanner': boolean;
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
export declare namespace CustomFieldText {
    enum ModelEnum {
        Person,
        Project
    }
}
