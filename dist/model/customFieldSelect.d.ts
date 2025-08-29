import { UpdateSelectCustomFieldOption200ResponseOption } from './updateSelectCustomFieldOption200ResponseOption';
export declare class CustomFieldSelect {
    'id': number;
    'name': string;
    'description': string;
    'model': CustomFieldSelect.ModelEnum;
    'options': Array<UpdateSelectCustomFieldOption200ResponseOption>;
    'singleSelect': boolean;
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
export declare namespace CustomFieldSelect {
    enum ModelEnum {
        Person,
        Project
    }
}
