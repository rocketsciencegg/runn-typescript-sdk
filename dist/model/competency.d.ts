import { AddPersonSkillRequestLevel } from './addPersonSkillRequestLevel';
export declare class Competency {
    'level'?: AddPersonSkillRequestLevel;
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
