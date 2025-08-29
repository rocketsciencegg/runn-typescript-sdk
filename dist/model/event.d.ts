import { Actor } from './actor';
import { EventActualDeletedActual } from './eventActualDeletedActual';
import { EventAssignmentDeletedAssignment } from './eventAssignmentDeletedAssignment';
import { EventContractDeletedContract } from './eventContractDeletedContract';
import { EventPersonDeletedPerson } from './eventPersonDeletedPerson';
import { EventProjectDeletedProject } from './eventProjectDeletedProject';
import { EventTimeOffDeletedTimeOff } from './eventTimeOffDeletedTimeOff';
export declare class Event {
    'eventId': string;
    'type': Event.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'project': EventProjectDeletedProject;
    'person': EventPersonDeletedPerson;
    'contract': EventContractDeletedContract;
    'actual': EventActualDeletedActual;
    'timeOff': EventTimeOffDeletedTimeOff;
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
export declare namespace Event {
    enum TypeEnum {
        ProjectDeleted,
        PersonDeleted,
        ContractDeleted,
        ActualDeleted,
        TimeOffDeleted,
        AssignmentDeleted
    }
}
