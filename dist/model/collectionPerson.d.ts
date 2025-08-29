import { CollectionPersonManagersInner } from './collectionPersonManagersInner';
import { Reference } from './reference';
import { Tag } from './tag';
export declare class CollectionPerson {
    'id': number;
    'firstName': string;
    'lastName': string;
    'email': string;
    'isArchived': boolean;
    'teamId': number;
    'references': Array<Reference>;
    'tags': Array<Tag>;
    'holidaysGroupId': number;
    'managers': Array<CollectionPersonManagersInner>;
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
