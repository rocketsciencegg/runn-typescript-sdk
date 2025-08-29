import { CreateProjectRequestAnyOf1FromTemplate } from './createProjectRequestAnyOf1FromTemplate';
export declare class CreateProjectRequestAnyOf1 {
    'fromTemplate': CreateProjectRequestAnyOf1FromTemplate;
    'name'?: string;
    'clientId'?: number;
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
