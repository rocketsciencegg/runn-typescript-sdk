import { Actor } from './actor';
import { EventActualDeletedActual } from './eventActualDeletedActual';
export declare class EventActualDeleted {
    'eventId': string;
    'type': EventActualDeleted.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'actual': EventActualDeletedActual;
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
export declare namespace EventActualDeleted {
    enum TypeEnum {
        ActualDeleted
    }
}
