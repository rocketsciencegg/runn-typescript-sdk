import { Actor } from './actor';
import { EventPersonDeletedPerson } from './eventPersonDeletedPerson';
export declare class EventPersonDeleted {
    'eventId': string;
    'type': EventPersonDeleted.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'person': EventPersonDeletedPerson;
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
export declare namespace EventPersonDeleted {
    enum TypeEnum {
        PersonDeleted
    }
}
