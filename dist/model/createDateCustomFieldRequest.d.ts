export declare class CreateDateCustomFieldRequest {
    'name': string;
    'description'?: string;
    'model': CreateDateCustomFieldRequest.ModelEnum;
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
export declare namespace CreateDateCustomFieldRequest {
    enum ModelEnum {
        Person,
        Project
    }
}
