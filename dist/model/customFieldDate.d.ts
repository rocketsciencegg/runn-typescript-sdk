export declare class CustomFieldDate {
    'id': number;
    'name': string;
    'description': string;
    'model': CustomFieldDate.ModelEnum;
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
export declare namespace CustomFieldDate {
    enum ModelEnum {
        Person,
        Project
    }
}
