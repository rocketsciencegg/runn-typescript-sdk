import { Actor } from './actor';
import { EventContractDeletedContract } from './eventContractDeletedContract';
export declare class EventContractDeleted {
    'eventId': string;
    'type': EventContractDeleted.TypeEnum;
    'actor': Actor;
    'timestamp': Date;
    'contract': EventContractDeletedContract;
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
export declare namespace EventContractDeleted {
    enum TypeEnum {
        ContractDeleted
    }
}
