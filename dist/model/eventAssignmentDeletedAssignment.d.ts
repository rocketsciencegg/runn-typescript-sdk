import { EventSubresourcePerson } from './eventSubresourcePerson';
import { EventSubresourcePhase } from './eventSubresourcePhase';
import { EventSubresourceProject } from './eventSubresourceProject';
import { EventSubresourceRole } from './eventSubresourceRole';
import { EventSubresourceWorkstream } from './eventSubresourceWorkstream';
export declare class EventAssignmentDeletedAssignment {
    'id': number;
    'personId': number;
    'startDate': string;
    'endDate': string;
    'projectId': number;
    'minutesPerDay': number;
    'roleId': number;
    'isActive': boolean;
    'note': string;
    'isBillable': boolean;
    'phaseId': number;
    'isNonWorkingDay': boolean;
    'isTemplate': boolean;
    'workstreamId': number;
    'project': EventSubresourceProject;
    'person': EventSubresourcePerson;
    'role': EventSubresourceRole;
    'phase': EventSubresourcePhase;
    'workstream': EventSubresourceWorkstream;
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
