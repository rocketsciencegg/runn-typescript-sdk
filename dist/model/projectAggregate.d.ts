import { ProjectAggregateActuals } from './projectAggregateActuals';
import { ProjectAggregateAssignments } from './projectAggregateAssignments';
export declare class ProjectAggregate {
    'id': number;
    'billableMinutes': number;
    'nonBillableMinutes': number;
    'totalMinutes': number;
    'assignments': ProjectAggregateAssignments;
    'actuals': ProjectAggregateActuals;
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
