import { ProjectAggregate } from './projectAggregate';
export declare class ListProjectTotalsReport200Response {
    'values': Array<ProjectAggregate>;
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
