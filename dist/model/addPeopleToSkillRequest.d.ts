import { AddPeopleToSkillRequestPeopleInner } from './addPeopleToSkillRequestPeopleInner';
export declare class AddPeopleToSkillRequest {
    'people': Array<AddPeopleToSkillRequestPeopleInner>;
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
