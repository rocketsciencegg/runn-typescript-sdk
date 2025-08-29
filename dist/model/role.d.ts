import { Reference } from './reference';
export declare class Role {
    'id': number;
    'name': string;
    'isArchived': boolean;
    'defaultHourCost': number;
    'standardRate': number;
    'references': Array<Reference>;
    'personIds': Array<number>;
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
