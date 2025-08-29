import { UpdateSelectCustomFieldOption200ResponseOption } from './updateSelectCustomFieldOption200ResponseOption';
export declare class UpdateSelectCustomFieldOption200Response {
    'option': UpdateSelectCustomFieldOption200ResponseOption;
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
