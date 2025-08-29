import { CollectionPersonManagersInner } from './collectionPersonManagersInner';
import { PersonCustomFields } from './personCustomFields';
import { PersonNotesInner } from './personNotesInner';
import { PersonSkillsInner } from './personSkillsInner';
import { Reference } from './reference';
import { Tag } from './tag';
export declare class Person {
    'id': number;
    'firstName': string;
    'lastName': string;
    'email': string;
    'isArchived': boolean;
    'references': Array<Reference>;
    'notes': Array<PersonNotesInner>;
    'teamId': number;
    'tags': Array<Tag>;
    'skills': Array<PersonSkillsInner>;
    'holidaysGroupId': number;
    'customFields': PersonCustomFields;
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
