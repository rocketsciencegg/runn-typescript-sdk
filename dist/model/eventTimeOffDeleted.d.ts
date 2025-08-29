import { Actor } from './actor';
import { EventTimeOffDeletedTimeOff } from './eventTimeOffDeletedTimeOff';
export declare class EventTimeOffDeleted {
    'eventId': string;
    'type': EventTimeOffDeleted.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'timeOff': EventTimeOffDeletedTimeOff;
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
export declare namespace EventTimeOffDeleted {
    enum TypeEnum {
        TimeOffDeleted
    }
}
