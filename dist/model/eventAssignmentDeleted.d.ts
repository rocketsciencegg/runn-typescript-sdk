import { Actor } from './actor';
import { EventAssignmentDeletedAssignment } from './eventAssignmentDeletedAssignment';
export declare class EventAssignmentDeleted {
    'eventId': string;
    'type': EventAssignmentDeleted.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'assignment': EventAssignmentDeletedAssignment;
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
export declare namespace EventAssignmentDeleted {
    enum TypeEnum {
        AssignmentDeleted
    }
}
