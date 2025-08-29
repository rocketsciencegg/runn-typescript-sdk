import { Reference } from './reference';
export declare class UpdateClientRequest {
    'name'?: string;
    'website'?: string;
    'isArchived'?: boolean;
    'references'?: Array<Reference>;
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
