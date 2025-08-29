import { Reference } from './reference';
export declare class CreateRoleRequest {
    'name': string;
    'defaultHourCost'?: number;
    'standardRate'?: number;
    'references'?: Array<Reference>;
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
