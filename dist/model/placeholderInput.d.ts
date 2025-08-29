import { Tag } from './tag';
export declare class PlaceholderInput {
    'id': number;
    'firstName': string;
    'lastName': string;
    'costPerHour': number;
    'roleId': number;
    'teamId': number;
    'tags': Array<Tag>;
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
