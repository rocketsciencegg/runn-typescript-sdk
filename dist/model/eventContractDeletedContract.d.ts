import { EventSubresourcePerson } from './eventSubresourcePerson';
import { EventSubresourceRole } from './eventSubresourceRole';
export declare class EventContractDeletedContract {
    'id': number;
    'personId': number;
    'roleId': number;
    'startDate': string;
    'endDate': string;
    'person': EventSubresourcePerson;
    'role': EventSubresourceRole;
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
