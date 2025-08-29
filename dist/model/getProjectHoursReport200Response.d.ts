import { ReportsHoursProjects } from './reportsHoursProjects';
export declare class GetProjectHoursReport200Response {
    'values': Array<ReportsHoursProjects>;
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
