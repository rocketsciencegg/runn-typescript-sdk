import { Actor } from './actor';
import { EventProjectDeletedProject } from './eventProjectDeletedProject';
export declare class EventProjectDeleted {
    'eventId': string;
    'type': EventProjectDeleted.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'project': EventProjectDeletedProject;
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
export declare namespace EventProjectDeleted {
    enum TypeEnum {
        ProjectDeleted
    }
}
