import { Reference } from './reference';
import { UpdatePersonRequestTagsInner } from './updatePersonRequestTagsInner';
export declare class UpdatePersonRequest {
    'firstName'?: string;
    'lastName'?: string;
    'email'?: string;
    'tags'?: Array<UpdatePersonRequestTagsInner>;
    'references'?: Array<Reference>;
    'isArchived'?: boolean;
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
