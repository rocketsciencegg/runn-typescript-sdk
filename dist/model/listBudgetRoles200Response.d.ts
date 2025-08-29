import { ProjectBudgetRole } from './projectBudgetRole';
export declare class ListBudgetRoles200Response {
    'values': Array<ProjectBudgetRole>;
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
