import { Reference } from './reference';
export declare class ClientInput {
    'name': string;
    'website'?: string;
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
