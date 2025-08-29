export declare class EventPersonDeletedPerson {
    'id': number;
    'email': string;
    'firstName': string;
    'lastName': string;
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
