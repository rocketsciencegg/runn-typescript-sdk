export declare class CreateCheckboxCustomFieldRequest {
    'name': string;
    'description'?: string;
    'model': CreateCheckboxCustomFieldRequest.ModelEnum;
    'required': boolean;
    'showInPlanner': boolean;
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
export declare namespace CreateCheckboxCustomFieldRequest {
    enum ModelEnum {
        Person,
        Project
    }
}
