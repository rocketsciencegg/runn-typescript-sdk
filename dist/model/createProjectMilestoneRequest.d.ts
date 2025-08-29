import { CreateProjectMilestoneRequestIcon } from './createProjectMilestoneRequestIcon';
export declare class CreateProjectMilestoneRequest {
    'title': string;
    'icon': CreateProjectMilestoneRequestIcon;
    'note'?: string;
    'date': string;
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
