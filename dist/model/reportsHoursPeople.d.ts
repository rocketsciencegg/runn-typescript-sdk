import { ReportsHoursPeopleActuals } from './reportsHoursPeopleActuals';
import { ReportsHoursPeopleAssignments } from './reportsHoursPeopleAssignments';
export declare class ReportsHoursPeople {
    'date': string;
    'roleId': number;
    'projectId': number;
    'personId': number;
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
