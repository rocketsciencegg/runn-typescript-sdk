export declare class Assignment {
    'id': number;
    'personId': number;
    'startDate': string;
    'endDate': string;
    'projectId': number;
    'minutesPerDay': number;
    'roleId': number;
    'isActive': boolean;
    'note': string;
    'isBillable': boolean;
    'phaseId': number;
    'isNonWorkingDay': boolean;
    'isTemplate': boolean;
    'isPlaceholder': boolean;
    'workstreamId': number;
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
