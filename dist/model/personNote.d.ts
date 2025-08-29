export declare class PersonNote {
    'id': number;
    'createdBy': string;
    'createdByEmail': string;
    'note': string;
    'personId': number;
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
