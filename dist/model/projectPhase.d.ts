export declare class ProjectPhase {
    'id': number;
    'name': string;
    'color': string;
    'startDate': string;
    'endDate': string;
    'updatedAt': Date;
    'createdAt': Date;
    'projectId': number;
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
