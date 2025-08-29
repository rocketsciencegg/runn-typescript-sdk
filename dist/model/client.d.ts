import { Reference } from './reference';
export declare class Client {
    'id': number;
    'name': string;
    'website': string;
    'isArchived': boolean;
    'references': Array<Reference>;
    'createdAt': Date;
    'updatedAt': Date;
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
