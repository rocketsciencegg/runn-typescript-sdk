import { CreateSelectCustomFieldRequestOptionsInner } from './createSelectCustomFieldRequestOptionsInner';
export declare class CreateSelectCustomFieldRequest {
    'name': string;
    'description'?: string;
    'model': CreateSelectCustomFieldRequest.ModelEnum;
    'options': Array<CreateSelectCustomFieldRequestOptionsInner>;
    'singleSelect': boolean;
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
export declare namespace CreateSelectCustomFieldRequest {
    enum ModelEnum {
        Person,
        Project
    }
}
