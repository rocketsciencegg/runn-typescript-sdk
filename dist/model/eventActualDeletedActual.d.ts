import { EventSubresourcePerson } from './eventSubresourcePerson';
import { EventSubresourceProject } from './eventSubresourceProject';
import { EventSubresourceRole } from './eventSubresourceRole';
import { EventSubresourceWorkstream } from './eventSubresourceWorkstream';
export declare class EventActualDeletedActual {
    'id': number;
    'date': string;
    'personId': number;
    'roleId': number;
    'projectId': number;
    'phaseId': number;
    'workstreamId': number;
    'billableMinutes': number;
    'nonbillableMinutes': number;
    'billableNote': string;
    'nonbillableNote': string;
    'person': EventSubresourcePerson;
    'role': EventSubresourceRole;
    'project': EventSubresourceProject;
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
