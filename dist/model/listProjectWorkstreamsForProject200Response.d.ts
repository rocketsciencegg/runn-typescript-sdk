import { ProjectWorkstream } from './projectWorkstream';
export declare class ListProjectWorkstreamsForProject200Response {
    'values': Array<ProjectWorkstream>;
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
