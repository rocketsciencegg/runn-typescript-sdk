import { PersonCompetencyAllOfLevel } from './personCompetencyAllOfLevel';
export declare class PersonCompetency {
    'personId': number;
    'level'?: PersonCompetencyAllOfLevel;
    'skillId': number;
    'createdAt': Date;
    'updatedAt': Date;
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
