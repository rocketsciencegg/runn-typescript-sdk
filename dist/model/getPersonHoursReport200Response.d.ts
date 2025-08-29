import { ReportsHoursPeople } from './reportsHoursPeople';
export declare class GetPersonHoursReport200Response {
    'values': Array<ReportsHoursPeople>;
    'nextCursor': string;
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
