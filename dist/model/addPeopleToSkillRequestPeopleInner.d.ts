import { AddPersonSkillRequestLevel } from './addPersonSkillRequestLevel';
export declare class AddPeopleToSkillRequestPeopleInner {
    'personId': number;
    'level'?: AddPersonSkillRequestLevel;
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
