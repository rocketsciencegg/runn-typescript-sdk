import { ReportsHoursPeopleActuals } from './reportsHoursPeopleActuals';
import { ReportsHoursPeopleAssignments } from './reportsHoursPeopleAssignments';
export declare class ReportsHoursProjects {
    'date': string;
    'roleId': number;
    'personId': number;
    'projectId': number;
    'workstreamId': number;
    'phaseId': number;
    'billableMinutes': number;
    'nonBillableMinutes': number;
    'totalMinutes': number;
    'assignments': ReportsHoursPeopleAssignments;
    'actuals': ReportsHoursPeopleActuals;
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
