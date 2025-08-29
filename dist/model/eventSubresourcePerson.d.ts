export declare class EventSubresourcePerson {
    'id': number;
    'firstName': string;
    'lastName': string;
    'email': string;
    'isPlaceholder': boolean;
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
