import { ProjectOtherExpense } from './projectOtherExpense';
export declare class ListOtherExpenses200Response {
    'values': Array<ProjectOtherExpense>;
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
