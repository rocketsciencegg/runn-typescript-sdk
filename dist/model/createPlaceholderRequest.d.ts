import { UpdatePersonRequestTagsInner } from './updatePersonRequestTagsInner';
export declare class CreatePlaceholderRequest {
    'roleId': number;
    'costPerHour'?: number;
    'tags'?: Array<UpdatePersonRequestTagsInner>;
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
