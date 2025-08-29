import { PersonCompetency } from './personCompetency';
export declare class ListPeopleSkills200Response {
    'values': Array<PersonCompetency>;
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
