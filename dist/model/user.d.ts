import { UserPermissions } from './userPermissions';
export declare class User {
    'id': number;
    'firstName': string;
    'lastName': string;
    'email': string;
    'personId': number;
    'permissions': UserPermissions;
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
