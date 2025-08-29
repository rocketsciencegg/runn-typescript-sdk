export declare class UpdateDateCustomFieldRequest {
    'name'?: string;
    'description'?: string;
    'required'?: boolean;
    'showInPlanner'?: boolean;
    'filterableInPlanner'?: boolean;
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
