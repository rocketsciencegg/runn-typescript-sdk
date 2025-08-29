import { EventSubresourcePerson } from './eventSubresourcePerson';
export declare class EventTimeOffDeletedTimeOff {
    'id': number;
    'personId': number;
    'startDate': string;
    'endDate': string;
    'note': string;
    'minutesPerDay': number;
    'person': EventSubresourcePerson;
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
