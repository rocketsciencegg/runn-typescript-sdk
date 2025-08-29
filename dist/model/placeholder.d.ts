import { Reference } from './reference';
import { Tag } from './tag';
export declare class Placeholder {
    'id': number;
    'firstName': string;
    'lastName': string;
    'isArchived': boolean;
    'tags': Array<Tag>;
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
